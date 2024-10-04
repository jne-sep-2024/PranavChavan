const http=require('https');
const server=http.createServer((req,res)=>{
console.log(req)
})
server.listen(1000);