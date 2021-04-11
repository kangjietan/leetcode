const fs = require("fs");
const path = require("path");
const execSync = require("child_process").execSync;

let arguments = process.argv.slice(2);
let difficulty = arguments[0];

let problemName = arguments.slice(1).join("_") + ".ts";

let folderName = arguments
  .slice(1)
  .map((str) => str.toLowerCase())
  .join("-");
let folderPath = path.join(__dirname, `./${difficulty}`);

let directory = folderPath + "/" + folderName;

fs.mkdir(directory, (err) => {
  if (err) throw err;

  fs.open(`${directory}/${problemName}`, "w", function (err, file) {
    if (err) throw err;
    if (file) {
      console.log("Created");
      execSync(`code ${directory}/${problemName}`);
    }
  });
});
