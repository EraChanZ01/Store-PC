import action from 'redux/decorators/action';
import Router from 'next/router';
import Entity, { HTTP_METHOD } from './Entities';
import { ILoginData } from 'server/constants';
import { call, cancelled, put } from 'redux-saga/effects';
import { getIdentity } from 'redux/action';


class Identity extends Entity {

    constructor() {
        super();
    }

    @action()
    public * loginUser(data: ILoginData) {
        
        const { response } = yield call(this.fetch, '/auth/login', data, HTTP_METHOD.POST);
        console.log('OHAYO', response)
        if (response  && response.data
            && response.data.userId
            && response.data.token && response.data.token.length > 0) {
            yield put(getIdentity(response));

            
            Router.push('/', '/', { shallow: true });
        }
    }

    

    @action()
    public * registerUser(data: any) {
         try {
            const fn = this.submit('register', '/auth/register');
            const { response } = yield call(fn, data);
             const responseHasID = response && response[0] && Object.prototype.hasOwnProperty.call(response[0], '_id');

             if (responseHasID && response[0].isOwnerCreate) {
                const href = '/admin/users/list';
                 Router.replace(href, href, { shallow: true });
             }
         } finally {
             if (yield cancelled()) {
                ('authorize yield cancelled');
            }
         }
    }
}

export default new Identity();



