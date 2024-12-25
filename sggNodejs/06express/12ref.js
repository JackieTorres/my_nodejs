const express = require("express");
const app = express();

app.use((req, res, next) => {
  let ref = req.get("referer");
  if (ref) {
    let url = new URL(ref);
    let hostname = url.hostname;
    if (hostname !== "127.0.0.1") {
      res.status(404).send("NO");
      return;
    }
  }
  next();
});

app.use(express.static(__dirname + "/public"));
app.get("*", (req, res) => {
  res.send("页面不存在");
});

app.listen(3000, () => {
  console.log("服务启动,端口3000.");
});
