import BaseContext from '../BaseContext';
import { Request, Response } from 'express';
import { route, GET, POST, DELETE } from 'awilix-express';


@route('/api/models')
export default class ModelsController extends BaseContext {

    @GET()
    @route('/all')
    getAll(req: Request, res: Response) {
        const { ModelsService } = this.di;
        console.log("modelsControler")
        const result = ModelsService.find()
            .then((data) => res.answer(data))
            .catch((err) => res.answer(null, err, 404))
    }



    @GET()
    @route('/save/all')
    saveAll(req: Request, res: Response) {
        const { ModelsService } = this.di;

        const result = ModelsService.find()
            .then((data) => res.answer(data))
            .catch((err) => res.answer(null, err, 404))

    }



    @GET()
    @route('/:id')
    getById(req: Request, res: Response) {
        const { ModelsService } = this.di;

        const result = ModelsService.findById(req.params.id)
            .then((data) => res.answer(data))
            .catch((err) => res.answer(null, err, 404))
    }


    @POST()
    @route('/save')
    save(req: Request, res: Response) {
        const { ModelsService } = this.di;
        const result = ModelsService.save(req.body, req.body.id)
            .then((data) => res.answer(data))
            .catch((err) => {
                console.log(err)
                return res.answer(null, err, 404)
            })
    }

    @DELETE()
    @route('/delete/:id')
    delete(req: Request, res: Response) {
        const { ModelsService } = this.di;

        const result = ModelsService.delete(req.params.id)
            .then((data) => res.answer(data))
            .catch((err) => res.answer(null, err, 404))
    }

}