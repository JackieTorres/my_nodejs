const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/html;charset=utf-8");
  let { method } = req;
  let { pathname } = new URL(req.url, "http://127.0.0.1");
  console.log(method);
  console.log(pathname);

  if (method === "GET" && pathname === "/login") {
    res.end("登录页面");
  } else if (method === "GET" && pathname === "/reg") {
    res.end("注册页面");
  } else {
    res.end("找不到页面");
  }
  console.log("==========");
});

server.listen(3000, () => {
  console.log("server running.");
});
