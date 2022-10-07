import BaseContext from '../BaseContext';
import { Request, Response } from 'express';
import { route, GET, POST, DELETE } from 'awilix-express';


@route('/api/brends')
export default class BrendsController extends BaseContext {

    @GET()
    @route('/all')
    getAll(req: Request, res: Response) {
        const { BrendsService } = this.di;

        const result = BrendsService.find()
            .then((data) => res.answer(data))
            .catch((err) => res.answer(null, err, 404))
    }



    @GET()
    @route('/save/all')
    saveAll(req: Request, res: Response) {
        const { BrendsService } = this.di;

        const result = BrendsService.find()
            .then((data) => res.answer(data))
            .catch((err) => res.answer(null, err, 404))

    }



    @GET()
    @route('/:id')
    getById(req: Request, res: Response) {
        const { BrendsService } = this.di;

        const result = BrendsService.findById(req.params.id)
            .then((data) => res.answer(data))
            .catch((err) => res.answer(null, err, 404))
    }


    @POST()
    @route('/save')
    save(req: Request, res: Response) {
        const { BrendsService } = this.di;
        console.log(req.body)
        const result = BrendsService.save(req.body, req.body.id)
            .then((data) => {console.log(data),res.answer(data)})
            .catch((err) => {console.log(err), res.answer(null, err, 404)})
    }

    @DELETE()
    @route('/delete/:id')
    delete(req: Request, res: Response) {
        const { BrendsService } = this.di;

        const result = BrendsService.delete(req.params.id)
            .then((data) => res.answer(data))
            .catch((err) => res.answer(null, err, 404))
    }

}