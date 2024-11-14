const express = require('express');
const app = express();
const PORT = 2000;
const EmployeeRoutes=require('./Routes/employeeRoutes');
const mongoose=require('mongoose')
app.use(express.json());

const uri = 'mongodb://localhost:27017/employee';
mongoose.connect(uri)
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error("Not connected: " + error));
app.use(EmployeeRoutes)

// Import routes and authentication middleware
//const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const authentication = require('./authentication');

// Use authentication middleware for protected routes
//app.use('/employeee', authentication, userRoutes);
app.use('/product', productRoutes); // No authentication middleware here
//How can you add a request logger middleware in Express?
app.use((req, res, next) => {
    const method = req.method;
    const url = req.url;
    const date = new Date();
    const isoString = date.toISOString();
    console.log(`Debugging the log ${ isoString},${url},${date},${method}`);
    next();
});
app.use((req,res,next)=>{
    
})

//How do you create dynamic routes using route parameters (e.g., `/users/:id`)req.param?
app.get('/user/:name', (req, res) => {
    console.log(req.params.name);
    res.send(`Hello world, ${req.params.name}`);
});
//How do you create dynamic routes using route parameters (e.g., `/users/?number1=12&nummber2=4   req.query`)?
app.get('/cal', (req, res) => {
    const { number1, number2 } = req.query;
    const total = parseInt(number1) + parseInt(number2);
    res.send(`Addition result: ${total}`);
});
//How do you create dynamic routes using route parameters (e.g., `/users/   req.body`)?
app.post('/user_Data', (req, res) => {
    const { name, age } = req.body;
     const user = {
        name,
        age
    };

    res.json(user);
});

// Error handling middleware (optional, for catching unhandled errors)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  

app.listen(PORT, (error) => {
    if (!error) {
        console.log("Server is successfully running on port " + PORT);
    } else {
        console.log("Error occurred, server can't start", error);
    }
});
