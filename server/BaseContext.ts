import { IContextContainer } from './container';

declare global {

    namespace Express {
        interface Response {
            print: (pathName: string, ssrData: any) => void;
            answer: (data: any, message?: any, status?: number) => void;
        }

        interface Request {
            ssrData: any
        }
    }
}

export default class BaseContext {
    protected di: IContextContainer;

    constructor(opts: IContextContainer) {
        this.di = opts;
    }
}