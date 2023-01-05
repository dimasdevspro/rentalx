import { CategoriesRepository } from "../../repositories/CategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {

    constructor(private categoriesRepository: CategoriesRepository){
        
    }

    execute({name, description}: IRequest):void {
        const categoryAlreadyExists = this.categoriesRepository.finByName(name);

    if(categoryAlreadyExists){
        throw new Error("Category Already Exists");
        
    }
    this.categoriesRepository.create({name, description});
    
    }

}

export { CreateCategoryUseCase };