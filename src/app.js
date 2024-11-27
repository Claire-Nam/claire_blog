import express from "express";
import dotenv from "dotenv";
import { Sequelize } from "sequelize";
import UserModels from "./db/models/user-model.js"; // User 모델 임포트

dotenv.config(); // 환경변수 로드

const app = express();
const port = process.env.PORT || 3000;

// DB 연결 설정
const sequelize = new Sequelize(
  `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
);

// DB 연결 확인
sequelize
  .authenticate()
  .then(() => {
    console.log("DB 연결 성공");
  })
  .catch(err => {
    console.log("DB 연결 실패:", err);
  });

// Express 서버 설정
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// 서버 실행
app.listen(port, () => {
  console.log(`서버가 ${port} 포트에서 실행 중...`);
});
