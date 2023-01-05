import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRepostory = new CategoriesRepository();

const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepostory);

const createCategoryController = new CreateCategoryController(createCategoryUseCase);


export { createCategoryController };
