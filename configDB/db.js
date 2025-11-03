import mongoose from "mongoose"
// import dotenv from "dotenv";
// dotenv.config();

export const dbConfig = async()=>{
    await mongoose.connect(process.env.DB_URL)
    console.log("DB connected!")
}