const express = require("express");
const app = express();

app.get("/response", (req, res) => {
  //1. express 中设置响应的方式兼容 HTTP 模块的方式
  res.statusCode = 404;
  res.statusMessage = "xxx";
  res.setHeader("abc", "xyz");
  res.write("响应体");
  res.end("xxx");
  //2. express 的响应方法
  res.status(500); //设置响应状态码
  res.set("xxx", "yyy"); //设置响应头
  res.send("中文响应不乱码"); //设置响应体
  //连贯操作
  res.status(404).set("xxx", "yyy").send("你好朋友");
});

app.listen(3000, () => {
  console.log("服务启动,端口3000.");
});
