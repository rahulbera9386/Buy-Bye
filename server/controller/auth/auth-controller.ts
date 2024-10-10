import { Request, Response } from "express";
import User from "../../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req: Request, res: Response) => {
  const { userName, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(500).json({
        success: false,
        message: "User already exists with same email",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(200).json({
      success: true,
      message: "User registration Success",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured while registering",
    });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || typeof user.password !== "string") {
      return res.status(500).json({
        success: false,
        message: "User With This Email Does Not Exist",
      });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(500).json({
        success: false,
        message: "Incorrect Password",
      });
    }
    const tokenData = {
      id: user._id,
      email: user.email,
    };
    const jwtSecretKey = process.env.JWT_SECRET_KEY;
    if (!jwtSecretKey) {
      throw new Error("JWT Secret key is not defined");
    }

    const token = jwt.sign(tokenData, jwtSecretKey, { expiresIn: "1h" });
    res
      .cookie("token", token, { httpOnly: true, secure: false })
      .status(200)
      .json({
        success: true,
        message: `Welcome To Buy-Bye ${user.userName}`,
        user:{
            email:user.email,
            role:user.role,
            userName:user.userName
        },
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Some error occured while trying to login",
    });
  }
};
