import express, {Request, Response } from "express";
import { loginUser, registerUser } from "../../controller/auth/auth-controller.ts";
const router=express.Router();

router.post("/register", (req: Request, res: Response) => {
    registerUser(req, res);
  });
  router.post("/login",(req:Request,res:Response)=>{
    loginUser(req,res);
  })


export default router;

