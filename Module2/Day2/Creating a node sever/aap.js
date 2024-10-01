const http=require('http');
function rqListener(req,res){
     console.log(req)
     console.log("Hello")
}
const server= http.createServer(rqListener);
server.listen(3000);