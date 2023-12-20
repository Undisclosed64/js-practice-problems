const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, content) {
  if (err) console.log(err);
  const cleanContent = content.replace(/\s+/g, " ").trim();
  writetoFile(cleanContent);
});
function writetoFile(content) {
  fs.writeFile("a.txt", content, function (err) {
    if (err) console.log(err);
    console.log("sucessfully written!");
  });
}
