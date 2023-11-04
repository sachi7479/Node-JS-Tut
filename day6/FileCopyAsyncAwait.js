const fs = require("fs");
const path = require("path");
const originPath = path.join(__dirname, "../FileOrigin");
const endPath = path.join(__dirname, "../FileEnd");

function copyFile(sp, dp) {
  return new Promise((resolve, reject) => {
    fs.copyFile(sp, dp, (err) => {
      if (err) {
        reject("error in coping file");
      } else {
        resolve("copied successfully");
      }
    });
  });
}

async function copyFiles(op, ep, files) {
  try {
    const promises = files.map((file) => {
      const sp = `${op}/${file}`;
      const dp = `${ep}/${file}`;
      return copyFile(sp, dp);
    });
    const results = await Promise.all(promises);
    results.forEach((message) => {
      console.log(message);
    });
  } catch (error) {
    console.log(error);
  }
}
fs.readdir(originPath, (err, files) => {
  copyFiles(originPath, endPath, files);
  if (err) {
    throw err;
  }
});
