import { Request, Response } from "express";
import * as rankService from "../services/rank.service";
import * as pointService from "../services/point.service";

export const ranks = async (req: Request, res: Response) => {
  const user = await rankService.findUserRank();
  res.status(200).json({ status: "ok", user });
};

export const getUserPoint = async (req: Request, res: Response) => {
  const user = await rankService.findUserRank();
  res.status(200).json({ status: "ok", user });
};

export const getUserPointById = async (req: Request, res: Response) => {
  if (!req.params.id) return res.status(500).json({ status: "error" });

  const data = await pointService.getUserPointByUserId(req.params.id);
  res.status(200).json({ status: "ok", data });
};

export const addUserPoint = async (req: Request, res: Response) => {
  try {
    const { auth0UserId, point } = req.body;

    if (!auth0UserId || typeof point !== "number" || point <= 0) {
      return res.status(400).json({
        status: "error",
        message: "auth0UserId and positive point are required",
      });
    }

    const pointData = await pointService.getUserPointByUserId(auth0UserId);
    const currentPoint = pointData?.point ?? 0;
    const newPoint = currentPoint + point;

    const data = await pointService.upsertUserPoint({
      auth0UserId,
      point: newPoint,
    });

    return res.status(200).json({
      status: "ok",
      data,
    });
  } catch (error) {
    console.log("addUserPoint error:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

export const deductUserPoint = async (req: Request, res: Response) => {
  try {
    const { point, auth0UserId } = req.body;

    if (!auth0UserId || typeof point !== "number" || point <= 0) {
      return res.status(400).json({
        status: "error",
        message: "Invalid auth0UserId or point",
      });
    }

    const pointData = await pointService.getUserPointByUserId(auth0UserId);
    const currentPoint = pointData?.point ?? 0;

    const newPoint = Math.max(currentPoint - point, 0);

    const data = await pointService.upsertUserPoint({
      auth0UserId,
      point: newPoint,
    });

    return res.status(200).json({
      status: "ok",
      data,
    });
  } catch (error) {
    console.log("deductUserPoint error:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};