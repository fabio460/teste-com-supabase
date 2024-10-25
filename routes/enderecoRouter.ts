import { Router } from "express";
import { listar } from "../controllers/enderecoController";

const enderecoRouter = Router()

enderecoRouter.get("/listar", listar)

export default enderecoRouter