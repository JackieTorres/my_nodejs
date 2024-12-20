const http = require("http");
const fs = require("fs");

//静态文件服务器
const server = http.createServer((req, res) => {
  let { pathname } = new URL(req.url, "http://127.0.0.1");
  let filePath = __dirname + pathname;
  if (pathname === "/") {
    let index = fs.readFileSync(__dirname + "/index.html");
    res.end(index);
  } else {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("page not found.");
        return;
      }
      res.end(data);
    });
  }
});
server.listen(3001, () => {
  console.log("server running.");
});
