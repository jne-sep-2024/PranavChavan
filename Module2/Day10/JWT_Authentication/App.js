const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const path = require('path');
const user=require('./models/User');
const app = express();

mongoose.connect('mongodb+srv://root:root@cluster1.y0ctw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1',
    { useNewUrlParser: true, useUnifiedTopology: true }) 
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error get:', err));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser()); 

app.use(express.static(path.join(__dirname, 'public')));


app.use(authRoutes);
app.get('/', async (req, res) => {
    try {
        const users = await user.find();
        res.json(users);
    } catch (error) {
        res.status(500).send('Error retrieving users: ' + error.message);
    }
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'signup.html'));
});



app.listen(9000, () => {
    console.log('Server is running on 9000');
});
