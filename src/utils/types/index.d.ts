import { UserInterface } from "../Interfaces/models";
import User from '../../models/user'


declare module 'express' {
  interface Response {
    cookies: { [key: string]: string };
  }
  
  interface Request {
    user?: any
  }
}
