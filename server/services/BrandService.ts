import  BaseContext  from '../BaseContext';

export default class BrendService extends BaseContext {

    public find() {
        const {BrendsModel} = this.di;
        return BrendsModel
            .find({})
    }

    public findById(brendId) {
        const {BrendsModel} = this.di;
        return BrendsModel
            .findById(brendId)
    }

    public delete(brendId) {
        const { BrendsModel } = this.di;
        return BrendsModel
            .findByIdAndRemove(brendId)
    }

    public async save(body,id) {
        const { BrendsModel } = this.di;
        let page = await BrendsModel.findById(id);
        if (page) {
            page.set(body);
        } else {
            page = new BrendsModel(body);
        }
        return page.save();
    }
}