const fs = require("fs");
const ws = fs.createWriteStream("./03ws.txt");

ws.write("one \r\n");
ws.write("two\r\n");
ws.write("there\r\n");

ws.close();
