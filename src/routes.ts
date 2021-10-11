import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin"



const router = Router();
const createUserController = new CreateUserController;
const createTagController = new CreateTagController;


// adicionado middleware para verificar admin no meio no path e a rota
router.post("/users", createUserController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);

export { router }