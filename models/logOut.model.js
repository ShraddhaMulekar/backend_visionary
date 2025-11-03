import mongoose from "mongoose";

const LogOutSchema = new mongoose.Schema({
    token:{type:String, required:true},
    date:{type:Date, default:Date.now, expires:3600}  // expires in 1 hour
}, {
    versionKey:false
})

export const LogOutModel = mongoose.model("logout", LogOutSchema)