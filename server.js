import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

let port = process.env.PORT || 3000;

// app.use("/", );

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
