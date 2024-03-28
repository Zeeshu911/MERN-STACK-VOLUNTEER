import mongoose from "mongoose";
import validator from "validator";

const messageScheam = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [3, "Name must contain at least 3 characters!"],
    maxLength: [30, "Name cannot exceed 30 characters!"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email!"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [11, "Phone must contain exact 11 Digits!"],
    maxLength: [11, "Phone must contain exact 11 Digits!"],
  },
  message: {
    type: String,
    required: true,
  },
});

export const Message = mongoose.model("Message", messageScheam);
