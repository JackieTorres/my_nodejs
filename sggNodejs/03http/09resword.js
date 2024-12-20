const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  let html = fs.readFileSync(__dirname + "/09table.html");
  res.end(html);
});

server.listen(3001, () => {
  console.log("server running.");
});

// let html = fs.readFileSync(__dirname + "\\09table.html");
// console.log(__dirname + "\\09table.html");
// console.log(html);
