import action from 'redux/decorators/action';
import { put, take, call, select } from 'redux-saga/effects';
import Entity from './Entities';
import { ENTITIES } from 'server/common';



export enum ROLE {
    GUEST = 'guest',
    USER = 'user',
    ADMIN = 'admin',
}

export interface User {
    id: string;

    userEmail: string;

    firstName: string;

    lastName: string;

    role: ROLE

    password: string;

    image: string;

    createdAt: Date;

    updatedAt: Date;
}


class UserEntity extends Entity {

    constructor() {
        super(ENTITIES.USERS);
    }

    @action()
    public * fetchAllUsers() {
        yield call(this.xRead, 'users/all');
    }

    @action()
    public * saveUsers(data) {
        yield call(this.xSave, 'users/save', data);
    }

}

export default new UserEntity();
