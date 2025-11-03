import express from "express"
import { registered } from "../pages/registered.page.js"

const userRouter = express.Router()

userRouter.post("/register", registered)

export default userRouter