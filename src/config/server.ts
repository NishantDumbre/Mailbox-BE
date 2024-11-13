const mongoose = require("mongoose");
import express from "express";

export const connectDB = async (app: express.Application) => {
  try {
    await mongoose.connect(process.env.MONGO_DB as string);
    app.listen(8080);
    console.log("Connected successfully");
  } catch (error: any) {
    console.log("Received below error");
    console.log(error);
  }
};
