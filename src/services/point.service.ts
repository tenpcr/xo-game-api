import UserPointModel from "../models/rank.model";

export const upsertUserPoint = async (payload: {
  auth0UserId: string;
  point: number;
}) => {
  return await UserPointModel.findOneAndUpdate(
    { auth0UserId: payload.auth0UserId },
    { $set: payload },
    { upsert: true, new: true }
  );
};

export const getUserPointByUserId = async (auth0UserId: string) => {
  return await UserPointModel.findOne({
    auth0UserId: auth0UserId,
  });
};
