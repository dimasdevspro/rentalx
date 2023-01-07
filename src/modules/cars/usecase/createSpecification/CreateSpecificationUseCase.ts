import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private specifictionsRepository: ISpecificationsRepository){

    }


    execute({name, description}:IRequest): void{
        const specificationAlreadyExists = this.specifictionsRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error("Specification already exists!")
        }

        this.specifictionsRepository.create({
            name,
            description,
        });

    }
}

export { CreateSpecificationUseCase };