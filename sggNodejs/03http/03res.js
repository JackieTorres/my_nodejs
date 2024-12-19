const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/html;charset=utf-8");
  res.end("这是返回体内容");
  console.log(req.method);
  console.log(req.url);
  console.log(req.httpVersion);
  //   console.log(req.headers);
  console.log(req.headers.host);
});
server.listen(3000, () => {
  console.log("服务已启动");
});
