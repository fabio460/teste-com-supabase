import { Router } from "express";
import { listar } from "../controllers/usuarioController";

const usuarioRouter = Router()

usuarioRouter.get("/listar", listar)

export default usuarioRouter