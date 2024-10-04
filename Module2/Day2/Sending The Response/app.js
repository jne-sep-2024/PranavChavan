const http=require('http');
function rqlListener(req,res)
{
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<head><title>My first Page</title>')
    res.write('</head>')
    res.write('<body><h1>My first Page Node js </h1>')
    res.write('<h2>Hello Node js</h2></body>')
    res.write('</html>')
    res.end();
}
const server=http.createServer(rqlListener);
server.listen(8080) 