const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();

app.use(session({
    secret: 'your_secret_key', 
    resave: false,
    saveUninitialized: true,
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = {
    pranav: { password: '12345', name: 'pranav' }
};

app.get('/login', (req, res) => {

    const savedUsername = req.cookies.username ;
    const savedPassword = req.cookies.password ;
    res.send(`
        <div class="container">
            <h1>Login Page</h1>
            <form action="/login" method="post">
                <input type="text" name="username" placeholder="Enter the username" value="${savedUsername}" required>
                <input type="password" name="pwd" placeholder="Enter the password" value="${savedPassword}" required>
                <button type="submit">Submit</button>
            </form>
        </div>
    `);
});

app.post('/login', (req, res) => {
    const { username, pwd } = req.body;

    if (users[username].name===username && users[username].password === pwd) {
       
        res.cookie('username', username, { maxAge: 900000, httpOnly: true }); 
        res.cookie('password', pwd, { maxAge: 900000, httpOnly: true }); 
        req.session.user = { username, name: users[username].name };
        res.send(`Successful Login (: <a href="/profilePage">Go to profile page</a>`);
    } else {
        res.send(`Invalid credentials. <a href="/login">Sorry, try again</a>`);
    }
});

app.get('/profilePage', (req, res) => {
    if (req.session.user) {
        res.send(`Hello, ${req.session.user.name} <a href="/logout">Logout</a>`);
    } else {
        res.send('You are not logged in. <a href="/login">Login</a>');
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.send('Error logging out.');
        }
        res.clearCookie('username'); 
        res.clearCookie('password'); 
        res.send('Logged out successfully :l;s <a href="/login">Login agin</a>');
    });
});

app.listen(8080, () => {
    console.log("Server is running on");
});
