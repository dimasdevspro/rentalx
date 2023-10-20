import {Router} from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/usecase/createCategory/CreateCategoryController';
import { ListCategoriesController } from '../modules/cars/usecase/listCategories/ListCategoriesController';
import { ImportCategoryController } from '../modules/cars/usecase/importCategory/importCategoryController';

const categoriesRoutes = Router();

const upload = multer({
dest:"./tmp",
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoryController = new ListCategoriesController();


categoriesRoutes.post("/", createCategoryController.handle)

categoriesRoutes.get("/", listCategoryController.handle)

categoriesRoutes.post("/import", upload.single("file"), importCategoryController.handle);

export { categoriesRoutes };