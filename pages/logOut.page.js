import { LogOutModel } from "../models/logOut.model.js"
import jwt from "jsonwebtoken"

export const LogoutPage = async(req, res)=>{
    try {
        const token = req.headers.authorization?.split(" ")[1]

        if(!token){
            return res.status(401).send({msg:"Please login first"})
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if(!decoded){
            return res.status(401).send({msg:"Invalid token, please login again"})
        }

        const alreadyLoggedOut = await LogOutModel.findOne({token})
        if(alreadyLoggedOut){
            return res.status(400).send({msg:"User already logged out"})
        }

        await LogOutModel.create({token})
        return res.status(200).send({msg:"Logged out successfully", token:token})

    } catch (error) {
        return res.status(500).send({msg:error.message})
    }
}