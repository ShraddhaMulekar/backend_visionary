import { UserModel } from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const logInPage = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ msg: "Please provide email and password" });
    }
    const userExist = await UserModel.findOne({ email });
    if (!userExist) {
      return res.status(404).json({ msg: "User not found, please register" });
    } else {
      bcrypt.compare(password, userExist.password, (err, result) => {
        if (err) {
          return res.status(500).json({ msg: err.message });
        }
        if (result) {
          const token = jwt.sign(
            { userId: userExist._id, role: userExist.role },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
          );
          return res.status(200).json({ msg: "Login successful", user_logIn: userExist, token });
        } else {
          return res.status(401).json({ msg: "Invalid credentials or password" });
        }
      });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};