import express from "express";
import { loginUser, signupUser, checkUser } from "../controllers/user";
import { authentication } from "../middlewares/authentication";
const userRouter = express.Router();
// @ts-ignore
userRouter.post("/signup", signupUser);
// @ts-ignore
userRouter.post("/login", loginUser);
// @ts-ignore
userRouter.get("/check", authentication, checkUser);

export default userRouter;
