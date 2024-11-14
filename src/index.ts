import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import compression from "compression";
import { connectDB } from "./config/server";
import dotenv from "dotenv";
import router from "./routes/routes";

dotenv.config();

const app = express();
app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(router)

connectDB(app);
