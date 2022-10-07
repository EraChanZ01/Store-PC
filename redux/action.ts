import { Action } from 'redux';

export const GET_IDENTITY = 'GET_IDENTITY';
export const UPDATE_IDENTITY = 'UPDATE_IDENTITY';
export const CLEAR_IDENTITY = 'CLEAR_IDENTITY';
export const SET_SSR_DATA = 'QUERY_DATA';
export const CLEAR_SSR_DATA = 'CLEAR_QUERY';


export function action(type: string, payload = {}): Action {
    return { type, ...payload };
}

export const setSSRData = (data: any ) => action(SET_SSR_DATA, data);
export const clearSSRData = (name: string) => action(CLEAR_SSR_DATA, { name });
export const getIdentity = (data: any) => action(GET_IDENTITY, data);
export const updateIdentity = () => action(UPDATE_IDENTITY, null);
export const clearIdentity = () => action(CLEAR_IDENTITY, {});


