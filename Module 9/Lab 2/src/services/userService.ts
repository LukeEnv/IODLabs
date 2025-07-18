import User, { IUser } from "../models/User";

export const createUser = async (userData: Partial<IUser>) => {
  const user = new User(userData);
  return await user.save();
};
