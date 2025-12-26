import mongoose, { Document, Schema } from "mongoose";

export interface UserPointDocument extends Document {
  auth0UserId: string;
  point: number;
  createdAt: Date;
}

const UserPointSchema = new Schema<UserPointDocument>({
  auth0UserId: { type: String },
  point: { type: Number },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<UserPointDocument>(
  "game_xo_points",
  UserPointSchema
);
