const express = require("express");
const app = express();
const allrouter = require("./13router/allrouter");

app.use(allrouter);

app.get("*", (req, res) => {
  res.send("页面不存在");
});

app.listen(3000, () => {
  console.log("服务启动,端口3000.");
});
