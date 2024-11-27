"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _postRouter = require("post-router.js");

Object.keys(_postRouter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _postRouter[key];
    }
  });
});