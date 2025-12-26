import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const checkAccessToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ status: "error", message: "No token provided" });
    }
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET!);
    (req as any).user = decoded;
    next(); 
  } catch (err) {
    return res.status(401).json({ status: "error", message: "Invalid or expired token" });
  }
};