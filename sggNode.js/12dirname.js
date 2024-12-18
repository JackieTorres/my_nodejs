const fs = require("fs");

fs.readdir("./", (err, data) => {
  if (err) throw err;
  console.log("ok");
  console.log(data);
  console.log(__dirname + "\\" + data[5]);
  console.log(`${__dirname}\\${data[5]}`);
});

// __dirname 是一个自带的全局变量，保存当前目录值
