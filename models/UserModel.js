import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
      minLength : 6
    },
    role: {
      type: String,
      enum :["user", "admin"],
      default: "user"
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

export const UserModel = mongoose.model("user", UserSchema);
