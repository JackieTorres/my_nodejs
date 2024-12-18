const fs = require("fs");

// fs.readdir("./", (err, data) => {
//   if (err) throw err;
//   console.log("ok");
//   console.log(data);
// });

fs.stat("./06rw.js", (err, data) => {
  if (err) throw err;
  console.log("ok");
  console.log(data.atimeMs);
  let today = new Date(data.atimeMs);
  console.log(today);
  //   console.log(today.slice(0, 3));
  // 怎么输出指定位数的字符
  // console.log(today.split("-"));
  var str = "Apple, Banana, Mango";
  var res = str.slice(7, 13);
  console.log(res);
});

// let time = new Date();
// console.log(time);
