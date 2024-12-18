const fs = require("fs");

//复制文件

// let data = fs.readFileSync("./02.txt", (err) => {
//   if (err) throw err;
//   console.log("读取成功");
// });

// fs.writeFile("./test.txt", data, (err) => {
//   if (err) throw err;
//   console.log("写入成功");
// });

// fs.copyFile("./02.txt", "t.txt", (err) => {
//   if (err) throw err;
//   console.log("复制完成");
// });

//删除

fs.rm("./t.txt", (err) => {
  if (err) throw err;
  console.log(`删除完成`);
});
