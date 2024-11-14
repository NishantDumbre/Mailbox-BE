import jwt from "jsonwebtoken";
import User from "../models/user";
import { Response, Request, NextFunction, RequestHandler } from "express";
import { DecodedToken } from "../utils/Interfaces/auth";
import { UserInterface } from "../utils/Interfaces/models";

declare global {
  namespace Express {
    interface Request {
      user?: UserInterface;
    }
  }
}

export const authentication = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.auth_token;
  if (!token) {
    res.status(401).json({ message: "Not authenticated" });
    return;
  }
  try {
    const decoded = jwt.verify(
      token,
      process.env.TOKEN_SECRET_KEY as string
    ) as DecodedToken;

    const foundUser = await User.findOne({ email: decoded?.email });
    // @ts-ignore
    req.user = foundUser;
    console.log('Authenticated')
    next();
  } catch (error) {
    res.status(404).json({ message: "Invalid token" });
  }
};
