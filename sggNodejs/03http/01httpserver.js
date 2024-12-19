const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/html;charset=utf-8");
  res.end("这是返回体内容");
});
server.listen(3000, () => {
  console.log("服务已启动");
});
