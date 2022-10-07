import  BaseContext  from '../BaseContext';

export default class ModelsService extends BaseContext {

    public find() {
        const { ModelsModel } = this.di;
        return ModelsModel
            .find({})
    }

    public findById(modelId) {
        const { ModelsModel } = this.di;
        return ModelsModel
            .findById(modelId)
    }

    public delete(modelId) {
        const { ModelsModel } = this.di;
        return ModelsModel
            .findByIdAndRemove(modelId)
    }

    

    public async save(body,id) {
        const { ModelsModel } = this.di;
        let page = await ModelsModel.findById(id);
        if (page) {
            page.set(body);
        } else {
            page = new ModelsModel(body);
        }
        return page.save();
    }

    

}