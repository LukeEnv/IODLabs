import { DataTypes, Model, Sequelize } from "sequelize";
import sequelize from "../config/database";
import User from "./User";

class Post extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public image!: string;
  public userId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize as Sequelize,
    modelName: "Post",
  }
);

Post.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Post, { foreignKey: "userId" });

export default Post;
