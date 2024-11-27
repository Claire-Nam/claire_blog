"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _myslq = _interopRequireDefault(require("myslq2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config(); // db 연결


var connection = _myslq["default"].createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect(function (err) {
  if (err) {
    console.log("DB연결 실패: ", err);
    return;
  }

  console.log("DB연결 성공");
});