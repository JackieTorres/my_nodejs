const express = require("express");
const app = express();

function checkMidd(req, res, next) {
  if (req.query.code === "9527") {
    next();
  } else {
    res.send("密文错误");
  }
}

app.get("/home", (req, res) => {
  res.send("前台");
});
app.get("/admin", checkMidd, (req, res) => {
  res.send("后台");
});
app.get("*", (req, res) => {
  res.send("页面不存在");
});

app.listen(3000, () => {
  console.log("服务启动,端口3000.");
});
