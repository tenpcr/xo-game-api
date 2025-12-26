import mongoose, { Document, Schema } from "mongoose";

export interface UserDocument extends Document {
  auth0UserId: string;
  email: string;
  name: string;
  picture: string;
  user_id: string;
  point: number;

  createdAt: Date;
}

const UserSchema = new Schema<UserDocument>({
  auth0UserId: { type: String },
  email: { type: String },
  name: { type: String },
  picture: { type: String },
  user_id: { type: String },
  point: { type: Number },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<UserDocument>("auth0_users", UserSchema);
