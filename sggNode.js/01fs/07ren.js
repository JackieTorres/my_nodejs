const fs = require("fs");
fs.rename("../02.txt", "./02.txt", (err) => {
  if (err) {
    console.log("执行失败");
  }
  console.log("执行成功");
});
