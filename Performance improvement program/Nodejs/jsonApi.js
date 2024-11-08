// ### 3. **JSON API**
//    **Objective:** Create a RESTful API that serves JSON data.

//    **Task:**
//    - Build a basic HTTP server that listens on port `5000`.
//    - Respond to the following API routes:
//      - `GET /users` – Return a JSON array of users (e.g., `[{ "id": 1, "name": "John" }, { "id": 2, "name": "Jane" }]`).
//      - `POST /users` – Accept a JSON body to add a new user (e.g., `{ "name": "New User" }`).
//      - Use `JSON.stringify()` to return data as JSON.

//    **Hints:**
//    - Use `req.method` to determine the HTTP method (GET, POST).
//    - Use `req.on('data', ...)` to parse the JSON body of a POST request.
//    - Make sure to set `Content-Type: application/json` in the response.

// ---

const http = require('http');

const Person_details = {
    name: 'pranav',
    role: 'no',
    id: 178
};

function creatingFunction() {
    return (req, res) => {
        console.log("Inside the  function");

        res.writeHead(200, {'Content-Type': 'text/plain'});
        setTimeout(()=>{
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Inserting the data');
        },1000)
     
    };
}

const server = http.createServer((req, res) => {
   
    
    if (req.method === 'GET' && req.url === '/user') {
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        
        
        res.end(JSON.stringify(Person_details));
    } 
    else if(req.method==='POST'&&req.url==='/user')
        {
            const handler = creatingFunction(); // This returns the handler function
            handler(req, res); // This invokes the returned function with the req and res objects
    
        let body=' '
        req.on('data',chunk=>{
            body+=chunk;
        })
        req.on('end',()=>{
            try{
            const data=JSON.parse(body);
            Person_details.name=data;
            if(!Person_details)
            {
                throw new Error("data is undefined")
            }
            else{
                console.log("succsesfully inserted")
                res.writeHead(200,{"Content-Type":"plain/text"})
                res.end('data succsessfully created')
            }
            }
            catch(error){
               console.Console.log("input is udefined")
            }
        })
        }
        

    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(5000, () => {
    console.log('HTTP server is listening on port 5000');
});
