
import BaseContext from '../BaseContext';
import { Request, Response } from 'express';
import { route, GET, POST, DELETE } from 'awilix-express';


@route('/api/users')
export default class UserController extends BaseContext {

    @GET()
    @route('/all')
    getAll(req: Request, res: Response) {
        const { UserService } = this.di;
        console.log("userControler")
        const result = UserService.find()
            .then((data) => res.answer(data))
            .catch((err) => res.answer(null, err, 404))
    }

    @GET()
    @route('/save/all')
    saveAll(req: Request, res: Response) {
        const { UserService } = this.di;

        const result = UserService.find()
            .then((data) => res.answer(data))
            .catch((err) => res.answer(null, err, 404))

    }

    @GET()
    @route('/:id')
    getById(req: Request, res: Response) {
        const { UserService } = this.di;

        const result = UserService.findById(req.params.id)
            .then((data) => res.answer(data))
            .catch((err) => res.answer(null, err, 404))
    }

    @POST()
    @route('/save')
    save(req: Request, res: Response) {
        const { UserService } = this.di;
        console.log(req.body.userId)
        const result = UserService.save(req.body, req.body.userId)
            .then((data) => res.answer(data))
            .catch((err) => res.answer(null, err, 404))
    }

    @DELETE()
    @route('/delete/:id')
    delete(req: Request, res: Response) {
        const { UserService } = this.di;

        const result = UserService.delete(req.params.id)
            .then((data) => res.answer(data))
            .catch((err) => res.answer(null, err, 404))
    }
}