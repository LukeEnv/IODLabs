import Post, { IPost } from "../models/Post";
import mongoose from "mongoose";

export const createPost = async (postData: Partial<IPost>) => {
  const post = new Post(postData);
  return await post.save();
};

export const likePost = async (postId: string, userId: string) => {
  const post = await Post.findById(postId);
  if (!post) throw new Error("Post not found");
  const userObjectId = new mongoose.Types.ObjectId(
    userId
  ) as unknown as mongoose.Schema.Types.ObjectId;
  if (!post.likes.some((like) => like.toString() === userObjectId.toString())) {
    post.likes.push(userObjectId);
    await post.save();
  }
  return post;
};

export const commentOnPost = async (
  postId: string,
  commentData: { userId: string; content: string }
) => {
  const post = await Post.findById(postId);
  if (!post) throw new Error("Post not found");
  const userObjectId = new mongoose.Types.ObjectId(
    commentData.userId
  ) as unknown as mongoose.Schema.Types.ObjectId;
  post.comments.push({
    userId: userObjectId,
    content: commentData.content,
    createdAt: new Date(),
  });
  await post.save();
  return post;
};
