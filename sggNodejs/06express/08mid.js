const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

function recordMiddleware(req, res, next) {
  let { url, ip } = req;
  fs.appendFileSync(
    path.resolve(__dirname, "./access.log"),
    `${ip} ${url}\r\n`
  );
  next();
}

app.use(recordMiddleware);
app.get("/home", (req, res) => {
  res.send("前台");
});
app.get("/admin", (req, res) => {
  res.send("后台");
});
app.get("*", (req, res) => {
  res.send("页面不存在");
});

app.listen(3000, () => {
  console.log("服务启动,端口3000.");
});
