import { Request, Response } from "express";
import UserModel from "../models/user.model";

export const sync = async (req: Request, res: Response) => {
  const { sub, email, name, picture } = req.body;
  let user = await UserModel.findOne({ auth0UserId: sub });
  if (!user) {
    user = await UserModel.create({
      auth0UserId: sub,
      email: email,
      name: name,
      picture: picture,
    });
  }
  res.status(200).json({ status: "ok", data: user });
};