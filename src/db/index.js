// import dotenv from "dotenv";
// import { Sequelize } from "sequelize";
// import UserModels from "./models/user-model";
// import PostModels from "./models/post-model";

// dotenv.config();

// // db 연결
// const sequelize = new Sequelize(
//   `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
// );

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("DB 연결 성공");
//   })
//   .catch(err => {
//     console.log("DB 연결 실패: ", err);
//   });

// // 모델 간 관계 정의
// PostModels.belongsTo(UserModels, { foreignKey: "author_id" });
// UserModels.hasMany(PostModels, { foreignKey: "author_id" });
