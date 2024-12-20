const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/html;charset=utf-8");
  res.setHeader("xiangying", "neirong");
  res.statusCode = 203;
  res.statusMessage = "lao6";
  res.write("设置响应体，");
  res.write("响应体内容");
  res.end();
});

server.listen(3000, () => {
  console.log("server running.");
});
