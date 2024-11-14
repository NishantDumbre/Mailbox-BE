import { JwtPayload } from "jsonwebtoken";

export interface DecodedToken  extends JwtPayload{
    loginEmail?:string
}