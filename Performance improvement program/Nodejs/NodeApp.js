
const http = require('http'); 
 
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  res.end('hello, this is my first Node.js server');
  
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:80801');
});


// Create an HTTP server
 server = http.createServer((req, res) => {
 
  if (req.url === '/') {
     
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Welcome to My Node.js Server!');
  } else if (req.url === '/about') {
      
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('This is a simple Node.js server that handles multiple routes.');
  } else if (req.url === '/contact') {
      
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Contact us at: contact@example.com');
  } else {
      
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});