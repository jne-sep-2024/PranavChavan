const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/studentRoutes');
const app=express();
const uri = 'mongodb+srv://root:root@cluster1.y0ctw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1';



mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error("Not connected: " + error));

app.use(bodyParser.json());
app.use(studentRoutes);

const port = 7000;
app.listen(port, () => {
  console.log(`Server is running on port `);
});
