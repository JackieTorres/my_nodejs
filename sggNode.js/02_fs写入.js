const fs = require("fs");

fs.writeFile("./test.txt", "[苹果,香蕉,芒果,甘蔗,葡萄]", (err) => {
  if (err) {
    console.log("写入失败");
    return;
  }
  console.log("写入成功");
});
