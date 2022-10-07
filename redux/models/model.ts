import action from 'redux/decorators/action';
import { put, take, call, select } from 'redux-saga/effects';
import Entity from './Entities';
import { ENTITIES } from 'server/common';


export interface Models {
    id: string;

    name: string;

    categoryName: string;

    brendName: string;

    price: number;

    info: any;

    image: string;

    createdAt: Date;

    updatedAt: Date;



}


class ModelsEntity extends Entity {

    constructor() {
        super(ENTITIES.MODEL);
    }

    @action()
    public * fetchAllModels() {
        yield call(this.xRead, 'models/all');
    }

    @action()
    public * saveModel(data) {

        yield call(this.xSave, 'models/save', data);

    }

}

export default new ModelsEntity();