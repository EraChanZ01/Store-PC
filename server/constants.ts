export enum ROLE {
    GUEST = 'guest',
    USER = 'user',
    ADMIN = 'admin',
}

export interface Ireg {
    userEmail: string,
    firstName: string,
    lastName: string,
    role: ROLE,
    password: string,
    image: string,
    phoneNumber: number,
    location: string
}


export interface IIdentity {
    userId: any;
    firstName: string,
    lastName: string,
    phoneNumber: number,
    location: string,
    userEmail: string;
    image?: string;
    token?: string;
    role?: ROLE;
}

export interface IModel {
    name: string,
    price: number,
    img: any,
    info: any,
    categoryid: string,
    brendName: string,



}


export interface IBrends {
    brendsId: any;
    name: string,
    categoryName: any,
    email: string,
    img: any,

}


export interface ILoginData {
    userEmail: string,
    password: string,
}
