const http=require('http');
const fs=require('fs');
function resListener(req,res){
    const url=req.url;
    const method=req.method;
    if(url === '/')
    {
        console.log(url)
        res.write('<html>');
        res.write('<head><title>Form Page</title></head>');
        res.write('<body>');
        res.write('<form action="/message" method="POST">');
        res.write('<input type="text" name="message">');
        res.write('<button type="submit">Submit</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end(); 
    }
    if(url==='/message' && method==='POST')
    {
        console.log("Hello")
        fs.writeFileSync('message.txt','Dummy_Text')
        res.statusCode=302;
        res.setHeader('Location','/')
        return res.end();
    }
    console.log(url)
    res.setHeader('Content-Type','text/html');
   
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>My First Page Node.js</h1>');
    res.write('<h2>Hello Node.js</h2></body>');
    res.write('</html>');
    return res.end();
    
}
const server=http.createServer(resListener)
server.listen(8080);