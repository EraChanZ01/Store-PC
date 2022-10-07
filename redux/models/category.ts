import action from 'redux/decorators/action';
import { put, take, call, select } from 'redux-saga/effects';
import Entity from './Entities';
import { ENTITIES } from 'server/common';

export interface Category {
    id: string;

    name: string;  



    
}


class CategoryEntity extends Entity {

    constructor() {
        super(ENTITIES.CATEGORY);
    }

    @action()
    public * fetchAllCategory() {
        yield call(this.xRead, 'category/all');
    }

}

export default new CategoryEntity();