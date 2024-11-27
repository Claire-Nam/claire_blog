import express from "express";
import dotenv from "dotenv";
import "./db/index.js"; // db 연결 및 모델 설정 로드

dotenv.config(); // 환경변수 로드

const app = express();
const port = process.env.PORT || 3001;

// 서버 실행
app.listen(port, () => {
  console.log(`서버가 ${port} 포트에서 실행 중...`);
});
