const path = require("path");
const execSync = require("child_process").execSync;

let arguments = process.argv.slice(2);
let difficulty = arguments[0];

let problemName = arguments.slice(1).join("_") + ".js";

let folderName = arguments
  .slice(1)
  .map((str) => str.toLowerCase())
  .join("-");
let folderPath = path.join(__dirname, `./${difficulty}`);

let directory = folderPath + "/" + folderName;

const output = execSync(`node ${directory}/${problemName}`, { encoding: 'utf-8' });
console.log(output);
