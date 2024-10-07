const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secretKey = 'HardToCrack'; 

exports.signup = async (req, res) => {
    const { username, password, email, firstName, lastName, age } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword, email, firstName, lastName, age });

    try {
        await user.save();
        res.redirect('/login');
    } catch (error) {
        res.status(500).send('Error creating user: ' + error.message);
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: '5m' });
        res.cookie('token', token, { httpOnly: true }); 
        res.redirect('/home');
    } else {
        res.status(401).send('Invalid credentials');
    }
};

exports.home = async (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.redirect('/login');
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        const user = await User.findById(decoded.id);
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Home</title>
            </head>
            <body>
                <h1>Welcome ${user.firstName} ${user.lastName}!</h1>
                <p>Email: ${user.email}</p>
                <p>Age: ${user.age}</p>
                <a href="/profile">Profile</a>
                <a href="/logout">Logout</a>
            </body>
            </html>
        `);
    } catch (error) {
        res.redirect('/login');
    }
};

exports.logout = (req, res) => {
    res.clearCookie('token');
    res.redirect('/login');
};

exports.profile = async (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.redirect('/login');
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        const user = await User.findById(decoded.id);
        
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Profile</title>
            </head>
            <body>
                <h1>Welcome ${user.firstName} ${user.lastName}!</h1>
                <p>Email: ${user.email}</p>
                <p>Age: ${user.age}</p>
                <a href="/logout">Logout</a>
                
                <form action="/update" method="POST">
                    <input type="hidden" name="userId" value="${user._id}">
                    <label>First Name: <input type="text" name="firstName" value="${user.firstName}" required></label>
                    <label>Last Name: <input type="text" name="lastName" value="${user.lastName}" required></label>
                    <label>Email: <input type="email" name="email" value="${user.email}" required></label>
                    <label>Age: <input type="number" name="age" value="${user.age}" required></label>
                    <button type="submit">Update</button>
                </form>

                <form action="/delete" method="POST" onsubmit="confirm('Do you want to delete your account?');">
                    <input type="hidden" name="userId" value="${user._id}">
                    <button type="submit">Delete</button>
                </form>
            </body>
            </html>
        `);
    } catch (error) {
        res.redirect('/login');
    }
};


exports.updateProfile = async (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.redirect('/login');
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        const user = await User.findById(decoded.id);

        const { firstName, lastName, email, age } = req.body;

        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.age = age;

        await user.save();
        res.redirect('/home');
    } catch (error) {
        res.redirect('/login');
    }
};

exports.deleteUser = async (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.redirect('/login');
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        await User.findByIdAndDelete(decoded.id);
        res.clearCookie('token');
        res.redirect('/signup'); 
    } catch (error) {
        res.redirect('/login');
    }
};
