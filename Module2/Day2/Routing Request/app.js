const http = require('http');

function resListener(req, res) {
    const url = req.url;

    // Check if the URL is the root path
    if (url === '/') {
        console.log(url)
        res.write('<html>');
        res.write('<head><title>Form Page</title></head>');
        res.write('<body>');
        res.write('<form action="/message" method="post">');
        res.write('<input type="text" name="message">');
        res.write('<button type="submit">Submit</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end(); // End response 1 afterv here after sending the form gone
    }

    // If the URL is not '/'
    console.log(url)
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>My First Page Node.js</h1>');
    res.write('<h2>Hello Node.js</h2></body>');
    res.write('</html>');
    res.end(); // End response here tooo
}

const server = http.createServer(resListener);
server.listen(8080);
