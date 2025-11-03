import express from "express"
import { registered } from "../pages/registered.page.js"
import { logInPage } from "../pages/login.page.js"
import { LogoutPage } from "../pages/logOut.page.js"

const userRouter = express.Router()

userRouter.post("/register", registered)
userRouter.post("/login", logInPage)
userRouter.post("/logout", LogoutPage)

export default userRouter