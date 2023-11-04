const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname,'../crud');
const filePath = `${dirPath}/apple.txt`;
// fs.writeFileSync(`${dirPath}/apple.txt`,'this is a fruit');
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item)
// })
// fs.appendFile(filePath,"my name is sachin",(err)=>{
//     if(!err)console.log("file is updated")
// })

// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log("file name is updated")
// })

fs.unlinkSync(`${dirPath}/fruit.txt`);