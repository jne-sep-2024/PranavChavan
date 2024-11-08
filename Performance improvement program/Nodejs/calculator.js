// **Build a Simple Calculator API**
//    **Objective:** Build a REST API that performs basic arithmetic operations.

//    **Task:**
//    - Create an HTTP server that listens on port `5000` and supports the following routes:
//      - `GET /add?a=2&b=3` – Return the sum of `a` and `b`.
//      - `GET /subtract?a=5&b=2` – Return the difference of `a` and `b`.
//      - `GET /multiply?a=4&b=3` – Return the product of `a` and `b`.
//      - `GET /divide?a=6&b=3` – Return the quotient of `a` and `b`.
//    - Validate that the query parameters are numbers and return an error if they are not.

 const http=require('http');
 const url=require('url');
 const server=http.createServer((req,res)=>{
  
    const {method,url:requrl}=req;
    console.log("fullurl",requrl)
    const parsedUrl = url.parse(requrl, true);
    console.log(parsedUrl)
    
    const {path,query}=parsedUrl
    console.log("path",path)
    console.log("query",query.a)
    
    console.log
    console.log("getting the details",method)

    if (method==='GET') {
        console.log("get")
        if (parsedUrl.pathname === '/add' && query.a && query.b) {
           
            console.log("adding");
            
            const a = parseFloat(query.a);
            const b = parseFloat(query.b);
            const sum = a + b;

            res.writeHead(200,{'Content-Type':'text/plain'})
            res.end(sum.toString()); 

        }
        else if(parsedUrl.pathname==='/sub' && query.a && query.b)
            {
                console.log("substracting")
                const a=parseFloat(query.a)
                const b=parseFloat(query.b)
                const sum=a-b
                res.writeHead(200,'Content-Type'-'text/plain')
                res.end(sum.toLocaleString());
            }
        else if(parsedUrl.pathname==='/div' && query.a && query.b)
        {
            console.log('division')
            const a=parseFloat(query.a)
            const b=parseFloat(query.b)
            const div=a/b;
            res.writeHead(200,'content-Type'-'text/plain')
            res.end(div.toString());
        }
        else if(parsedUrl.pathname==='/div' && query.a && query.b)
            {
                console.log('multiply')
                const a=parseFloat(query.a)
                const b=parseFloat(query.b)
                const mul=a*b;
                res.writeHead(200,'content-Type'-'text/plain')
                res.end(mul.toLocalString());
            }
       }

 })

 server.listen(8080,()=>{
    console.log("server is running")
 })



