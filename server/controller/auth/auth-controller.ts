import { Request, Response } from "express";
import User from "../../models/User";
import  bcrypt  from 'bcryptjs';

export const registerUser=async (req:Request,res:Response)=>{
    const {userName,email,password}=req.body;
    try{
        const existingUser=await User.findOne({email});
        if(existingUser)
        {
            return res.status(500).json({
                success:false,
                message:"User already exists with same email"
            })
        }
    
        const hashedPassword=await bcrypt.hash(password,10);
    
        const newUser= new User({
    userName,
    email,
    password:hashedPassword
        })

        await newUser.save();
        res.status(200).json({
            success:true,
            message:"User registration Success"
        })
    }
    catch(e)
    {
        console.log(e);
        res.status(500).json({
          success: false,
          message: "Some error occured",
        });
    }
   

}


