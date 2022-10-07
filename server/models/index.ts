import UserModel, { UserType } from './User';
import { asClass, asValue } from 'awilix';
import BrendsMode, {BrendsType} from './Brand'; 
import CategoryModel, {CategoryType} from './Category';
import ModelsModel, {ModelsType} from './Model';


export interface IModelContainer {
    UserModel: UserType;
    BrendsModel: BrendsType;
    CategoryModel: CategoryType;
    ModelsModel: ModelsType;

}


export default {
    UserModel: asValue(UserModel),
    BrendsModel: asValue(BrendsMode),
    CategoryModel: asValue(CategoryModel),
    ModelsModel: asValue(ModelsModel),

}