import action from 'redux/decorators/action';
import { put, take, call, select } from 'redux-saga/effects';
import Entity from './Entities';
import { ENTITIES } from 'server/common';

export interface Device {
    id: string;

    name: string;
    
    price: number;

    img: string ;

    deviceinfo: string;

    brand: string;

    createdAt: Date;

    updatedAt: Date;
}


class DeviceEntity extends Entity {

    constructor() {
        super(ENTITIES.DEVICE);
    }

    @action()
    public * saveDevice(data: any) {
        yield call(this.xSave, 'devices/save', data);
    }

}

export default new DeviceEntity();
