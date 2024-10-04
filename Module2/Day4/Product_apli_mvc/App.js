const express = require('express');
const path = require('path');
const productRoutes = require('./Routes/Add-product'); 
const app = express();
console.log("App.js Main file");
app.use('/', productRoutes); 
app.listen(9000)
