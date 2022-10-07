import  BaseContext  from '../BaseContext';

export default class CategoryService extends BaseContext {

    public find() {
        const { CategoryModel } = this.di;
        return CategoryModel
            .find({})
    }

    public findById(categoryId) {
        const { CategoryModel } = this.di;
        return CategoryModel
            .findById(categoryId)
    }

    public delete(categoryId) {
        const { CategoryModel } = this.di;
        return CategoryModel
            .findByIdAndRemove(categoryId)
    }

    

    public async save(body,id) {
        const { CategoryModel } = this.di;
        let page = await CategoryModel.findById(id);
        if (page) {
            page.set(body);
        } else {
            page = new CategoryModel(body);
        }
        return page.save();
    }

}