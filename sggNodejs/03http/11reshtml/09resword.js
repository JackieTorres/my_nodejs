const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let { pathname } = new URL(req.url, "http://127.0.0.1");
  if (pathname === "/") {
    let html = fs.readFileSync(__dirname + "/09table.html");
    res.end(html);
  } else if (pathname === "/table.css") {
    let css = fs.readFileSync(__dirname + "/table.css");
    res.end(css);
  } else if (pathname === "/table.js") {
    let js = fs.readFileSync(__dirname + "/table.js");
    res.end(js);
  } else {
    res.statusCode = 404;
    res.end(`<h1>404 NOT</h1>`);
  }
});

server.listen(3001, () => {
  console.log("server running.");
});

// let html = fs.readFileSync(__dirname + "\\09table.html");
// console.log(__dirname + "\\09table.html");
// console.log(html);
