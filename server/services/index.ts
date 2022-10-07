import { asClass, asValue } from 'awilix';
import  BrendsService from './BrandService';
import ModelsService from './ModelService';
import CategoryService from './CategoryService';
import UserService from './UserService';




export interface IServicesContainer {
    UserService: UserService;
    BrendsService:  BrendsService;
    CategoryService: CategoryService;
    ModelsService: ModelsService;

}

export default {
    UserService: asClass(UserService).singleton(),
    BrendsService: asClass( BrendsService).singleton(),
    CategoryService: asClass(CategoryService).singleton(),
    ModelsService: asClass(ModelsService).singleton(),

}