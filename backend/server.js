import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import movieRoute from "./routes/movieRoute.js";
import Groq from "groq-sdk";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

app.get("/models", async (req, res) => {
  try {
    const models = await groq.models.list();
    res.json(models);
  } catch (err) {
    res.status(500).json(err);
  }
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log(" MongoDB Connected Successfully"))
  .catch((error) => console.log(" DB Not Connected Successfull :", error));

// Your API route
app.use("/api/movie", movieRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
