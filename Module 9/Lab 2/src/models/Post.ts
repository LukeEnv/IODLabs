import mongoose, { Schema, Document } from "mongoose";

export interface IPost extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  title: string;
  description: string;
  imageUrl?: string;
  likes: mongoose.Schema.Types.ObjectId[];
  comments: {
    userId: mongoose.Schema.Types.ObjectId;
    content: string;
    createdAt: Date;
  }[];
  createdAt: Date;
}

const postSchema: Schema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  comments: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      content: { type: String, required: true },
      createdAt: { type: Date, default: Date.now },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IPost>("Post", postSchema);
