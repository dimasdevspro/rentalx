import { Router } from "express";

import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";

const usersRouter = Router();

const CreateUserController = new CreateUserController();

usersRouter.post("/", CreateUserController.handle);

export { usersRouter }
