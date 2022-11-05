const fs = require("fs");

fs.readFile("song7.txt", (error, txtString) => {
  if (error) throw err;
  let str = txtString.toString();
  let arrStr = str.split("\r");
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] == "\n") {
      arrStr[i] = "--------------------";
    }
  }
  console.log(arrStr.join("\r\n"));
});
