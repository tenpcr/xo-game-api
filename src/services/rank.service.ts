import UserPointModel from "../models/rank.model";

export const findUserRank = async (): Promise<any> => {
  const user = await UserPointModel.aggregate([
    { $sort: { point: -1 } },
    {
      $lookup: {
        from: "auth0_users",
        localField: "auth0UserId",
        foreignField: "auth0UserId",
        as: "user",
      },
    },
    { $unwind: "$user" },
    {
      $replaceRoot: {
        newRoot: {
          $mergeObjects: ["$user", "$$ROOT"],
        },
      },
    },
    {
      $project: {
        user: 0,
      },
    },
  ]);

  if (!user) {
    throw new Error("USER_NOT_FOUND");
  }

  return user;
};
