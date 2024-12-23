const express = require("express");
const app = express();

app.get("/ot", (req, res) => {
  // res.redirect("http://x1x.fun");
  // res.download(__dirname + "/sky.png");
  // res.json({
  //   id: 1,
  //   data: "bannaer",
  // });
  // res.sendFile(__dirname + "/05sing.html");
  // res.sendFile(__dirname + "/踏浪而行 - 棱镜乐队.mp3");
});

app.listen(3000, () => {
  console.log("服务启动,端口3000.");
});
