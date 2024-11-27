"use strict";

import "dotenv/config";
import { app } from "./src/app.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`https://localhost:${PORT}에서 응답 대기중`);
});
