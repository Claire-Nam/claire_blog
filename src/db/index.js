import dotenv from "dotenv";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const mysql = require("mysql2");

dotenv.config();

// db 연결
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect(err => {
  if (err) {
    console.log("DB연결 실패: ", err);
    return;
  }
  console.log("DB연결 성공");
});
