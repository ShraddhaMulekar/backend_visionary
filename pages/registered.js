import { UserModel } from "../models/UserModel";

export const registered = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const userExist = await UserModel.find({ email });

    if (userExist) return res.status(400).json({ msg: "User already exists" });

    const newUser = new UserModel.create({
      name,
      email,
      password,
      role,
    });

    await newUser.save();
    return res.status(201).json({ msg: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
