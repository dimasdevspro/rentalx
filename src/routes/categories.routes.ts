import {Router} from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/usecase/createCategory';
import { listCategoriesController } from '../modules/cars/usecase/listCategories';
import { importCategoryController } from '../modules/cars/usecase/importCategory';

const categoriesRoutes = Router();

const upload = multer({
dest:"./tmp",
});

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
})

categoriesRoutes.get("/", (request, response)=>{
    return listCategoriesController.handle(request, response);
})

categoriesRoutes.post("/import", upload.single("file"), (request, response)=>{
    return importCategoryController.handle(request, response);

});

export { categoriesRoutes };