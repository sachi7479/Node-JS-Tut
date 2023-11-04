// console.warn("code step by step");
// console.log(100 + 20);
const http = require('http');
const data = require('./data');
http.createServer((req,resp)=>{
resp.writeHead(200,{'content-Type':'application\json'});
resp.write(JSON.stringify(data));
resp.end();
}).listen(4500);
