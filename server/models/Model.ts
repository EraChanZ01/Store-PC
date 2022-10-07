import mongoose from 'mongoose';
import { prop, modelOptions, getModelForClass, DocumentType, Ref, pre } from '@typegoose/typegoose';

class DeviceInfo {
    @prop({ type: String })
    public param: string

    @prop({ type: String })
    public value: string

    @prop({ type: String })
    public id: string
}

@modelOptions({ schemaOptions: { collection: 'models' } })
export class Models {


    @prop({ type: String })
    public name: string;

    @prop({ type: Number })
    public price: number;


    @prop({ type: Array })
    public info: Array<DeviceInfo>;


    @prop({ type: String })
    public image: string;

    @prop({ type: Object })
    public categoryid: Object;

    @prop({ type: String })
    public brendName: string;




    @prop({ type: Date, default: () => Date.now() })
    createdAt: Date;

    @prop({ type: Date, default: () => Date.now() })
    updatedAt: Date;
}

export type ModelsType = mongoose.Model<DocumentType<Models>, {}> & Models;
export default getModelForClass(Models);