import express from "express";
import { signupUser } from "../controllers/user";
const userRouter = express.Router();


userRouter.post("/signup", signupUser);

export default userRouter;
