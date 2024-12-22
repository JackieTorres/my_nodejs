const express = require("express");
const app = express();
const { singers } = require("./singersMini.json");

app.get("/singer/:id.html", (req, res) => {
  let { id } = req.params;
  let result = singers.find((item) => {
    if (item.id === Number(id)) {
      return true;
    }
  });
  if (!result) {
    res.end("no singer");
  }

  res.end(`<!DOCTYPE html>
  <html lang="zh_cn">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>singer</title>
    </head>
    <body>
      <h1>${result.singer_name}</h1>
      <img src="${result.singer_pic}" />
    </body>
  </html>
  `);

  // res.end("ok");
});

app.all("*", (req, res) => {
  res.end("页面不存在");
});

app.listen(3000, () => {
  console.log("服务启动,端口3000.");
});
