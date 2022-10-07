import passportLocal from 'passport-local';
import {IContextContainer} from 'server/container'
import BaseContext from '../BaseContext'
import { Request, Response } from 'express';
import { ROLE } from '../constants'

export default class SignUpStrategy extends BaseContext {
    private strategyUser: passportLocal.Strategy;

    get strategy() {
        return this.strategyUser;
    }

    constructor(opts: IContextContainer) {
        super(opts);

        console.log('jwt: initialization Local-SignUp strategy');
        this.verifyRequestUser = this.verifyRequestUser.bind(this);

        this.strategyUser = new passportLocal.Strategy({
            passwordField: 'password',
            passReqToCallback: true,
            usernameField: 'userEmail',
            session: false,

        }, this.verifyRequestUser);
    }

public async verifyRequestUser(req: Request, userEmail: string, password: string, done: any) {
        const { UserModel} = this.di;
        const u = await UserModel.findOne({ userEmail: userEmail });
        if (u) {
            return done({ userEmail: 'That e-mail already taken!' });
        }

        const { firstName, lastName, location, phoneNumber , role } = req.body;

        const userData = {
            userEmail: userEmail && userEmail.trim().toLowerCase(),
            firstName : firstName,
            lastName : lastName,
            location : location,
            phoneNumber : phoneNumber,
            role : ROLE.USER,
            password: password && password.trim(),
            createdAt : Date.now(),
            updatedAt : Date.now(),
            image : "https://robohash.org/" + firstName,
            
        };

        const newUser = new UserModel(userData);

        newUser.save().then((user: any) => {
            
            return done(null, {
                _id: user._id
            
            });
        })
            .catch((error: any) => {
                console.log('verifyRequestUser__catch__error', error)
                return done(error);
            });
    }
}