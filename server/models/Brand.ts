import mongoose from 'mongoose';
import { prop, modelOptions, getModelForClass, DocumentType, Ref, pre } from '@typegoose/typegoose';
import { Blob } from 'buffer'


@modelOptions({ schemaOptions: { collection: 'brends' } })
export class Brends {

    
    @prop({type: String})
    public name: string;

    @prop({type: Array})
    public img: any;

    @prop({type: String})
    public email: string;

    


    @prop({type: Object})
    public categoryName: Object;

    @prop({ type: Date , default:() => Date.now()})
    createdAt: Date;

}


export type BrendsType = mongoose.Model<DocumentType<Brends>, {}> & Brends;
export default getModelForClass(Brends);