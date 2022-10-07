
import BaseContext from '../BaseContext';
import { Request, Response, NextFunction } from 'express';
import { route, GET, POST, DELETE, before } from 'awilix-express';
import httpStatus from '../../http-status';

import { IIdentity} from '../constants'

@route('/auth')

export default class AuthController extends BaseContext {

    @POST()
    @route('/signup')

    public register(req: Request, res: Response, next: NextFunction) {

        // tslint:disable-next-line: no-shadowed-variable
        return this.di.passport.authenticate('local-signup', (errors, identity) => {
            if (errors) {
                console.log('register__errors=', errors);
                res.answer(null, errors, httpStatus.BAD_REQUEST);
            } else if (identity) {
                res.answer(identity, 'You have successfully registered! Now you should be able to log in.');
            } else {
                console.log('register__catch__errors=', errors);
                res.answer(null, 'Could not process the form.', httpStatus.BAD_REQUEST);
            }
        })(req, res, next);
    }

    @POST()
    @route('/login')

    public login(req: Request, res: Response, next: NextFunction) {

        // tslint:disable-next-line: no-shadowed-variable
        const JST_EXPIRE = 3;
        const REMEMBER_ME_EXPIRE = 30;
        return this.di.passport.authenticate('local-login', (err, identity: IIdentity) => {
            if (err) {
                return res.answer(null, err, httpStatus.BAD_REQUEST);
            }
            
            // let expire = JST_EXPIRE;
            // if (req.body.rememberMe) {
            //     expire = REMEMBER_ME_EXPIRE;
            // }
            res.cookie('token', identity.token, { maxAge: 1000606024 });
            
            return res.answer(identity);
        })(req, res, next);
        
    }

    



   
                           

}