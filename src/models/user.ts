import mongoose, { Schema } from "mongoose";
import { UserInterface } from "../utils/Interfaces/models";

const User: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
});

export default mongoose.model<UserInterface>("user", User);
