const fs = require('fs');
const path  = require('path');

const originPath = path.join(__dirname,'../FileOrigin')
const endPath = path.join(__dirname,'../FileEnd')

function copyFiles(source,destination,files){
    files.forEach((file)=>{
        const sp = `${source}/${file}`;
        const dp = `${destination}/${file}`;

        fs.copyFile(sp,dp,(err)=>{
            if(err){
                console.error('Error in coping');
            }
            else{
                console.log('copied');
            }
        });
    });

}


fs.readdir(originPath,(err,files)=>{
   copyFiles(originPath,endPath,files)
   if(err){
    throw err;
   }
})
// console.log(originPath,endPath)