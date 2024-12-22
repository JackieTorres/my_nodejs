const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.end("hello express!");
});

app.all("*", (req, res) => {
  res.end("页面不存在");
});

app.listen(3000, () => {
  console.log("服务启动,端口3000.");
});
