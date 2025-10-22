import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("get connected!")
  console.log("get connected!");
});

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
