import { routeType } from "../types";
import usuarioRouter from "./usuarioRouter";

export const router:routeType = [
    {endpoint:"/",route:usuarioRouter},
    {endpoint:"/endereco",route:usuarioRouter},

]