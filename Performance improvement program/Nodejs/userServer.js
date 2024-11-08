// Objective: Build a simple HTTP server that handles multiple types of requests.

// Task:

// Create an HTTP server that listens on port 3000.
// Serve different responses for different routes:
// / – Return a welcome message.
// /about – Return information about the server.
// /contact – Return a contact page with your details (can be a hardcoded string).
// Use res.writeHead() and res.end() to send the appropriate response.
// Hints:

// Use req.url to check the requested path.
// Experiment with setting the Content-Type header for different types of content.


const http = require('http'); 

const server=http.createServer((req,res)=>{
const Person_details={
    name:'pranav',
    role:121,
    MobNum:99876
}

    if(req.url==='/')
    {
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('Welcome to My Page (: ');
    }
    else if(req.url==='/about')
    {
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('server is running on the port of 2000');
    }
    else if((req.url==='/contact'))
    {
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end(`user detials,${Person_details.name}`);
    }
    else {
        res.writeHead(404,{'Content-Type':'text/plain'})
        res.end('Request url got wrong')
    }
})
server.listen(3000,()=>{
    console.log("server is running on 3000")
})

