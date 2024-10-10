import express, {Request, Response } from "express";
import { registerUser } from "../../controller/auth/auth-controller.ts";
const router=express.Router();

router.post("/register", (req: Request, res: Response) => {
    registerUser(req, res);
  });


export default router;

