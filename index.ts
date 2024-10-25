import  express from "express";
import { router } from "./routes";
 const app = express()
 
 router.map(e=>{
    app.use(e.endpoint, e.route)
 })

 app.listen(4000,()=>console.log("aplicação rodando na porta 4000!"))