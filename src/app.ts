import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

import connectDB from "./config/db";
import authRoute from "./routes/auth.routes";
import gameRoute from "./routes/game.routes";

connectDB().catch((err) => {
  console.error("MongoDB connection failed:", err);
  process.exit(1);
});

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to TenPCR World!" });
});

app.use("/auth", authRoute);
app.use("/game", gameRoute);

app.get("/gettoken", (req: Request, res: Response) => {
  if (!process.env.SECRET) return res.json({ message: "No scret" });

  const payload = {
    userId: 1,
    username: "tonyten",
    name: "Tony Ten",
  };

  const token = jwt.sign(payload, process.env.SECRET);

  console.log("Generated JWT (no expiry):", token);
  res.json({ message: "Token generated successfully!" });
});

export default app;
