const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  res.end("res ok");
  let requrl = url.parse(req.url, true);
  // console.log(requrl);
  console.log(requrl);
  console.log(requrl.query.pass);
});
server.listen(3000, () => {
  console.log("服务已启动");
});
