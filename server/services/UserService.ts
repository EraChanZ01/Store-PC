import BaseContext from '../BaseContext';


export default class UserService extends BaseContext {

    public find() {
        const { UserModel } = this.di;
        return UserModel
            .find({})
    }

    public findById(userId) {
        const { UserModel } = this.di;
        return UserModel
            .findById(userId)
    }

    public delete(userId) {
        const { UserModel } = this.di;
        return UserModel
            .findByIdAndRemove(userId)
    }



    public async save(body, id) {
        const { UserModel } = this.di;
        let page = await UserModel.findById(id);
        console.log(body, id)
        if (page) {
            page.set(body);
        } else {
            page = new UserModel(body);
        }
        return page.save();
    }

}