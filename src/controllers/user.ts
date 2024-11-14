import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import User from "../models/user";

export const signupUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.body);
  const { signupEmail, signupPassword } = req.body;

  const saltRounds = parseInt(process.env.SALT_ROUNDS as string);

  bcrypt.hash(signupPassword, saltRounds, async (err, hash) => {
    if (err) {
      console.log(err);
      res.status(502).json({ message: "Internal server error" });
    }
    try {
      const instance = new User({
        email: signupEmail,
        password: hash,
      });
      await instance.save()
      return res.status(200).json({ message: "Account created successfully!" });
      
    } catch (error:any) {
        console.log(error)
        return res.status(409).json({ message: "User already registered" });
    }
  });
};
