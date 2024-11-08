// **Create a Timer Using `setTimeout` and `setInterval`**
// **Objective:** Understand asynchronous programming with timers.

// **Task:**
// - Create a Node.js script that:
//   - Logs "This message appears after 5 seconds" using `setTimeout()`.
//   - Logs the current time every 3 seconds using `setInterval()`.

// **Hints:**
// - Use `setTimeout()` for one-time delays and `setInterval()` for recurring actions.
// ---

const http=require('http')

const timeLap=(req,res,next)=>{
    console.log("processing")
    setTimeout(()=>{
       console.log("processed")
    },2000)
    next();
}

const SetingTimeInterval=(req,res)=>{
    interval=setInterval(() => {
        const currentTime = new Date().toLocaleTimeString();
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(`Current time: ${currentTime}`);
        console.log(`Current time: ${currentTime}`);
      }, 2000)
    

      req.on('close',()=>{
        clearInterval(interval);
        console.log('stopping the time updates.');
      })
    };
            
const server=http.createServer((req,res)=>{
    console.log('server Created')
    timeLap(req, res, () => {
        
        SetingTimeInterval(req, res);
      });
})

server.listen(8080,()=>{
    console.log("runnongg on the server ")
})
