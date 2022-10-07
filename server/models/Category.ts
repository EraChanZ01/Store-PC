import mongoose from 'mongoose';
import { prop, modelOptions, getModelForClass, DocumentType, Ref , pre } from '@typegoose/typegoose';


@modelOptions({ schemaOptions: { collection: 'category' } })
export class Category {


    @prop({type: String})
    public name: string;  


}

export type CategoryType = mongoose.Model<DocumentType<Category>, {}> & Category;
export default getModelForClass(Category);