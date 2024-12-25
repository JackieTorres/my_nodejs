const express = require("express");
const ejs = require("ejs");
const fs = require("fs");

const app = express();
let news = "国际局势";
let sport = "欧冠比赛";

let srt = fs.readFileSync(__dirname + "/01title.json", "utf-8");
console.log(srt[0]);
let html = fs.readFileSync(__dirname + "/01ejs.html", "utf-8");
let ejsrender = ejs.render(html, { title: news, pp: sport });
console.log(ejsrender);
// console.log(html);

// app.get("/", (req, res) => {
//   res.send(ejsrender);
// });

// app.listen(3000, () => {
//   console.log("server running.");
// });
