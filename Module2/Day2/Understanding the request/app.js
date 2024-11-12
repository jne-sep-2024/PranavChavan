const http=require('http');
function rqlListener(req,res)
{
    console.log(req.url,req.method,req.headers);
    process.exit()
}
const server=http.createServer(rqlListener);
server.listen(8080);




// 1. Server Creation
// The code creates an HTTP server using http.createServer(rqlListener), where rqlListener is a callback function that handles requests.
// 2. Listening for Requests
// The server starts listening on port 8080 with server.listen(8080). This puts the server in a state where it's ready to accept incoming connections.
// 3. Event Loop Mechanism
// The Node.js event loop continuously checks for events (like incoming requests). When a request comes in, the event loop:
// Picks up the request and invokes the rqlListener function.
// 4. Handling Requests
// Inside the rqlListener function:
// console.log(req.url, req.method, req.headers) logs the request details.
// // Important: The call to process.exit() immediately terminates the Node.js process after handling the first request.