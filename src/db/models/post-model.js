import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize(
  `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
);

const PostModels = sequelize.define(
  "postlist",
  {
    title: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    author_id: {
      type: DataTypes.INTEGER, // 참조 대상 user_id 타입
    },
  },
  {
    freezeTableName: true, // 테이블 이름 고정
  }
);

export default PostModels;
