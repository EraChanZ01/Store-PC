import * as awilix from 'awilix';
import services, {IServicesContainer} from './services/index'
import models, {IModelContainer} from './models/index'
import configCore from '../config'
import SignUpStrategy from './passports/SignUpStategy'
import LoginStrategy from './passports/LoginStrategy'
import passport, {PassportStatic} from 'passport'
import JwtStrategy from './passports/JwtStategy';

const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY,
});


export interface IContextContainer extends  IModelContainer, IServicesContainer {
    config: any
     passport: PassportStatic,
     SignUpStrategy : SignUpStrategy,
    LoginStrategy : LoginStrategy,
    JwtStrategy : JwtStrategy,
}


export const passportFunc = (ctx: IContextContainer) =>{
    passport.use('local-login', ctx.LoginStrategy.strategy)
    passport.use('local-signup', ctx.SignUpStrategy.strategy)
    passport.use(ctx.JwtStrategy.strategy)
      return passport
}


container.register({
    config: awilix.asValue(configCore),
    passport: awilix.asFunction(passportFunc).singleton(),
    SignUpStrategy: awilix.asClass(SignUpStrategy).singleton(),
    LoginStrategy: awilix.asClass(LoginStrategy).singleton(),
    JwtStrategy: awilix.asClass(JwtStrategy).singleton(),
  
    
    ...models,
    ...services,
})

export default container;