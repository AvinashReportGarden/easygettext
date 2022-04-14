const fs = require("fs");
const path = require('path');

function getFiles(folderPath) {
  let allFiles = fs.readdirSync(folderPath);
  let result = [];

  allFiles.forEach(function (file) {
    const newbase = path.join(folderPath, file);
    if (fs.statSync(newbase).isDirectory()) {
      result = result.concat(getFiles(newbase));
    } else {
      result.push(newbase);
    }
  });
  return result;
}

function jsonPretty(data) {
  return JSON.stringify(data, null, 2);
}

exports.getFiles = getFiles;
exports.jsonPretty = jsonPretty;