import mongoose from 'mongoose';
import { prop, modelOptions, getModelForClass, DocumentType, Ref , pre } from '@typegoose/typegoose';
import { ROLE } from 'server/constants';
import bcrypt from 'bcrypt';


@pre<User>('save', function (next) { // or @pre(this: Car, 'save', ...

    //!!! the following lines of the code have to be last in the SAVE callback
    //!!! --------------------------------------------------------------------
    if (!this.isModified('password')) {
        return next();
    }


    bcrypt.hash(this.password, 10, (hashError: Error, encrypted: string) => {
        if (hashError) {
            return next(hashError);
        }

        // replace a password string with hash value
        this.password = encrypted;
        return next();
    });
    //!!! --------------------------------------------------------------------

})

@modelOptions({ schemaOptions: { collection: 'users' } })
export class User {
    @prop({type: String})
    public userEmail: string;  

    @prop({type: String})
    public firstName: string;

    @prop({type: String})
    public lastName: string;

    @prop({type: String})
    public role: ROLE;

    @prop({type: String})
    public password: string;
    
    @prop({type: String})
    public image: string;

    @prop({type: Number})
    public phoneNumber: number;

    @prop ({type: String})
    public location: string;

    


    @prop({ type: Number , default:() => Date.now()})
    createdAt: number;

    @prop({ type: Number , default:() => Date.now()})
    updatedAt: number;
}

export type UserType = mongoose.Model<DocumentType<User>, {}> & User;
export default getModelForClass(User);