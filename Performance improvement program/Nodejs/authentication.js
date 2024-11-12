// - Create an authentication system using **JSON Web Tokens (JWT)**:
//      - Create a `/login` route that accepts a username and password (hardcoded for simplicity).
//      - Generate a JWT token on successful login and send it back to the user.
//      - Protect a `/profile` route where the user needs to provide a valid JWT token in the request header to access the route.

//    **Hints:**
//    - Use `jsonwebtoken` library to generate and verify JWT tokens.
//    - Store the secret key securely (e.g., in environment variables).


const http=require('http');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const user={
    name:'MSD',
    pwd:178
}
const server=http.createServer((req,res)=>{
   
     const{method,url:urlrqst}=req;
    
     const Parseurl=url.parse(urlrqst,true);    
     const {path,query}=Parseurl;
     console.log('path',path);
     console.log('query',query);
    
     if(req.method==='post' && path==='/login')
     {
        console.log("login ")
     }
})

server.listen(3000,()=>{
    console.log("server is running ")
})