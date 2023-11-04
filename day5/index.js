const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname,'../FileOrigin');
// console.log(dirPath)

for (let i=1; i<=100;i++){
fs.writeFileSync(dirPath+"/hello"+i+".txt","a simple text file");
}

fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
        console.log(item)
    })
    if(err){
        console.log(err)
    }
})
