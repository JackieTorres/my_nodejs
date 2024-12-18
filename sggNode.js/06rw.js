const fs = require("fs");

//流式写入

// const rs = fs.createReadStream(
//   "'C:\\Users\\happy\\Downloads\\jianpiansetup_51.exe',"
// );
// const ws = fs.createWriteStream(
//   "C:\\Users\\happy\\Downloads\\jianpiansetup_51-1.exe"
// );

// rs.on("data", (chunk) => {
//   ws.write(chunk);
// });

//流式写入多个

// const rs1 = fs.createReadStream("C:\\Users\\happy\\Downloads\\01.txt");
// const rs2 = fs.createReadStream("C:\\Users\\happy\\Downloads\\02.txt");
// const ws = fs.createWriteStream("C:\\Users\\happy\\Downloads\\03.txt");

// rs1.on("data", (chunk) => {
//   ws.write(chunk);
// });
// rs2.on("data", (chunk) => {
//   ws.write(chunk);
// });

//流式写入，复现图留种子

const rs1 = fs.createReadStream("C:\\Users\\happy\\Downloads\\a\\1.png");
const rs2 = fs.createReadStream("C:\\Users\\happy\\Downloads\\a\\2.zip");
const ws = fs.createWriteStream("C:\\Users\\happy\\Downloads\\a\\3.png");

rs1.on("data", (chunk) => {
  ws.write(chunk);
});
rs2.on("data", (chunk) => {
  ws.write(chunk);
});

//失败
