const fs = require("fs");

const content = "hi there 2!";
fs.writeFile("test.txt", content, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("written successfully!");
  }
});
