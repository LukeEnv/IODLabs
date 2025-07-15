import { Sequelize } from "sequelize";

const sequelize = new Sequelize("blog_db", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
