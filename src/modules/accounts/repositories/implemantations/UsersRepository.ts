import { User } from "../../entities/User";
import { Repository, getRepository } from "typeorm";
import { IUsersRepository } from "../IUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;
    
    constructor(){
        this.repository = getRepository(User);
    }

    async create({name, username, email, driver_license, password}: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name, username, email, driver_license, password, 
        });
        
        await this.repository.save(user);
    }

}

export { UsersRepository }