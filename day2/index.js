const http = require('http');

http.createServer((req,resp)=>{
    resp.write("<h1>hello you are doing well</h1>");
    resp.end();
}).listen(4500);

