const fs = require("fs");

// fs.readFile("./03ws.txt", (error, data) => {
//   if (error) throw error;
//   console.log(data);
// });

let data = fs.readFileSync("./03ws.txt", "utf-8");
console.log(data);
