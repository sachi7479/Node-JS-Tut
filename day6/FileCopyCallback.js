const fs = require("fs");
const path = require("path");

const originPath = path.join(__dirname, "../FileOrigin");
const endPath = path.join(__dirname, "../FileEnd");

function copyFile(sp, dp, callback) {
  fs.copyFile(sp, dp, (err) => {
    if (err) {
      callback(`Error in  copying`);
    } else {
      callback(null, `file has been successfully copied.`);
    }
  });
}

function copyFiles(op, ep, files, callback) {
  let filesCopied = 0;

  files.forEach((file) => {
    const sp = `${op}/${file}`;
    const dp = `${ep}/${file}`;

    copyFile(sp, dp, (err, message) => {
      if (err) {
        console.error(err);
      } else {
        console.log(message);
      }

      filesCopied++;

      if (filesCopied === files.length) {
        callback();
      }
    });
  });
}

fs.readdir(originPath, (err, files) => {
  copyFiles(originPath, endPath, files,()=>{
    console.log("All file has been copied")
  });
  if (err) {
    throw err;
  }
});
