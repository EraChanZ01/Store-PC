import BaseContext from '../BaseContext';
import { Request, Response } from 'express';
import { route, GET, POST, DELETE } from 'awilix-express';


@route('/api/category')
export default class CategoryController extends BaseContext {

    @GET()
    @route('/all')
    getAll(req: Request, res: Response) {
        const { CategoryService } = this.di;

        const result = CategoryService.find()
            .then((data) => res.answer(data))
            .catch((err) => res.answer(null, err, 404))
    }



    @GET()
    @route('/save/all')
    saveAll(req: Request, res: Response) {
        const { CategoryService } = this.di;

        const result = CategoryService.find()
            .then((data) => res.answer(data))
            .catch((err) => res.answer(null, err, 404))

    }



    @GET()
    @route('/:id')
    getById(req: Request, res: Response) {
        const { CategoryService } = this.di;

        const result = CategoryService.findById(req.params.id)
            .then((data) => res.answer(data))
            .catch((err) => res.answer(null, err, 404))
    }


    @POST()
    @route('/save')
    save(req: Request, res: Response) {
        const { CategoryService } = this.di;
        console.log(req)
        const result = CategoryService.save(req.body, req.body.id)
            .then((data) => res.answer(data))
            .catch((err) => res.answer(null, err, 404))
    }

    @DELETE()
    @route('/delete/:id')
    delete(req: Request, res: Response) {
        const { CategoryService } = this.di;

        const result = CategoryService.delete(req.params.id)
            .then((data) => res.answer(data))
            .catch((err) => res.answer(null, err, 404))
    }

}