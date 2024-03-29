import { inject, injectable } from "tsyringe";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject("SpecificationsRepository")
        private specifictionsRepository: ISpecificationsRepository){

    }


    async execute({name, description}:IRequest): Promise<void>{
        const specificationAlreadyExists = await this.specifictionsRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error("Specification already exists!")
        }

        await this.specifictionsRepository.create({
            name,
            description,
        });

    }
}

export { CreateSpecificationUseCase };