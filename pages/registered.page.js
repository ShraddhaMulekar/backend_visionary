import { UserModel } from "../models/UserModel.js";
import bcrypt from "bcrypt";

export const registered = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if(!email || !password || !name){
      return res.status(400).json({ msg: "Please provide name, email and password" });
    }

    const userExist = await UserModel.findOne({ email });

    if (userExist) return res.status(400).json({ msg: "User already exists" });

    bcrypt.hash(
      password,
      Number(process.env.SALT_ROUNDS),
      async (err, hash) => {
        if (err) {
          return res.status(500).json({ msg: err.message });
        }
        const newUser = new UserModel({ name, email, role, password: hash });
        await newUser.save();
        return res.status(201).json({ msg: "User registered successfully" });
      }
    );
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
