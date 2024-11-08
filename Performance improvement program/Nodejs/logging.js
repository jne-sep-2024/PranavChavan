// **Basic Logging Middleware**
//    **Objective:** Create a simple logging middleware for your HTTP server.

//    **Task:**
//    - Build a middleware that logs every incoming request to the console with the method and URL (e.g., `GET /about`).
//    - Integrate this middleware into your existing HTTP server.

//    **Hints:**
//    - Write a function that logs request details and call it before handling the actual route.
//    - Use `req.method` and `req.url` for logging.


const http=require('http');

const logRequest = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  };
  
  const requestHandler = (req, res) => {
   
    if (req.url === '/about') {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('About the  page detsila');
    } else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('page not found');
    }
  };
  const server = http.createServer((req, res) => {
   
    logRequest(req, res, () => {
      
      requestHandler(req, res);
    });
  });
server.listen(8080,(req,res)=>{
    console.log("server running")
})

