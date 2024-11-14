import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import compression from "compression";
import cookieParser from 'cookie-parser'
import { connectDB } from "./config/server";
import dotenv from "dotenv";
import router from "./routes/routes";

dotenv.config();

const app = express();
app.use(compression());
app.use(cookieParser());

app.use(
    cors({
      origin: 'http://localhost:3000',  // Frontend URL (adjust if different)
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      credentials: true,  // Allow cookies to be sent
    })
  );
  

app.use(bodyParser.json());
app.use(router)

connectDB(app);
