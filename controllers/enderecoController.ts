import { Request, Response } from "express";
import { prisma } from "../prismaInstancia";
export const listar = async(req:Request, res:Response)=>{
   const r = await prisma.endereco.findMany()
   try {
    res.json(r)
   } catch (error) {
    res.json(error)
   }
}