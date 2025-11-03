import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import { dbConfig } from "./configDB/db.js";

// Load environment variables first
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

app.use("/user", userRouter );

app.listen(port, async() => {
  try {
    await dbConfig();
    console.log(`server running on http://localhost:${port}`);
  } catch (error) {
    console.error('Failed to connect to database:', error);
  }
});
