const merge = require('lodash/merge');

if (typeof document !== 'undefined') {
    throw new Error('Do not import config.js from inside the client-side code.');
}


const isDev = process.env.NODE_ENV !== 'production';



const Config = {
    siteName: 'CoreGame',
    baseUrl: process.env.BASE_URL || "http://localhost",
    port: 3000,
    dev: isDev,
    debug_mode: process.env.DEBUG_MODE,
mongo: {

        uri: process.env.MONGO_URL|| 'mongodb://localhost:27017/CoreGame',
        // mongodb://localhost:27017/BlogDB
        // mongodb+srv://Aleksey:melnikloh@cluster0.lloww.mongodb.net/MyDB
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        }
    },
jwtToken : "XzHtDE8CTXgSHKr6JHmVNwFLt8CDWkx4LvZtDEEkjf2AdnaPTp3pY75n7w3N2SWsSL2GAZjHf6LJ4XetQxFk2h7ywSs77f8D9czr",
}

export default Config;

