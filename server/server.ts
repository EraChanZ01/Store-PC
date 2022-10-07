import express from 'express';
import { Request, Response, NextFunction } from 'express';
import next from 'next';
import config from '../config'
import mongoose from 'mongoose';
import { loadControllers, scopePerRequest } from 'awilix-express';
import container, { IContextContainer } from './container';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { IIdentity, ROLE } from './constants'
import { PassportStatic } from 'passport'
import multer from 'multer'
import cookies from 'cookie-parser'


const upload = multer({ dest: "uploads/" });
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()



const startDataBase = async () => {
  console.info('Starting application');
  let connectionString: mongoose.Connection = null;
  try {
    console.info('Initializing database ...');
    connectionString = connectToMongoDb(config.mongo.uri, config.mongo.options);
  } catch (e) {
  }
}

app.prepare().then(() => {
  const server = express()




  server.use(cookies());
  server.use(bodyParser.json({ limit: '10mb' }));
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json())
  server.use(cookieSession({
    name: 'session',
    keys: [config.jwtSecret],
    maxAge: 312460601000, // 31 days
  }));

  server.use(requestMiddleware)
  server.use(responses);
  server.use(acl);
  server.use(scopePerRequest(container));
  const files = 'controllers/**/*.ts';
  server.use(loadControllers(files, { cwd: __dirname }));

  server.all('*', (req, res) => {
    return handle(req, res)
  })


  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  //@before(upload.single('file'))
  //server.post("/upload", upload.array("files"), uploadFiles);


  //function uploadFiles(req, res, next) {
  // console.log(req.body);
  //console.log(req.files);
  //res.json({ message: "Successfully uploaded files" });

  //}


  server.post("/upload", upload.array("files"), uploadFiles);

  function uploadFiles(req, res) {
    console.log(req.body);
    console.log(req.files);
    res.json({ message: "Successfully uploaded files" });
  }


  startDataBase()

  server.listen(config.port, () => {
    console.log(`> Ready on http://localhost:${config.port}`)
  })



})

const responses = (req: Request, res: Response, next: NextFunction) => {
  res.answer = (
    data: any,
    message: any = null,
    status: number = 200,
  ) => {

    return res.status(status).json({
      data,
      message
    });
  };
  next()
}

export const requestMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // console.log('????????????  requestMiddleware =', req.path, req.session.identity);
  res.print = (
    pathName: string,
    ssrData: any
  ) => {


    req.ssrData = ssrData;

    //const nextApp = container.resolve('webServer').nextApp;
    //@ts-ignore



    app.render(req, res, pathName, req.query);


  };
  next();
}




export const IGNORS = [
  '/favicon.ico',
  '/_next',
  '/static',
  '/sitemap.xml',
  '/robots.txt',
  '/service-worker.js',
  '/manifest.json',
  '/styles.chunk.css.map',
  '/__nextjs',
];




const acl = (req: any, res: Response, next: NextFunction) => {
  let useAcl = true
  const url = req.url
  for (const item of IGNORS) {
    if (url.startsWith(item)) {
      useAcl = false
    }
  }

  /*if (useAcl) {

    const passport = container.resolve<PassportStatic>('passport')

    const jwt = passport.authenticate('jwt', (err, identity: IIdentity) => {
      const isLogged = identity && identity.userId && identity.role !== ROLE.GUEST;
      req.identity = identity;
      

      if (!isLogged) {
        //identity = clearIdentity()
      }

      const isAllow = undefined
      if (isAllow) {
        return res.answer(null)
      }
    });
    jwt(req, res, next);
  }*/
  if (useAcl) {
    const passport = container.resolve<PassportStatic>('passport')

    return passport.authenticate('jwt', (err, identity: IIdentity) => {

      const isLogged = identity && identity.userId && identity.role !== ROLE.GUEST;
      req.identity = identity;
      next()
    })(req, res, next);

  } else {
    next();
  }

}





const connectToMongoDb = (uri: string, options: any) => {
  mongoose.connect(uri, options);

  mongoose.Promise = global.Promise;

  mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
  });

  mongoose.connection.once('open', function () {
    console.info('MongoDB is connected');
  });

  return mongoose.connection;
}