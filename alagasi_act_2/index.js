const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, 'views')));
app.use(bodyParser.urlencoded({ extended: true }));

const sendLoginPage = (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views', 'login.html'));
};

const sendSignupPage = (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views', 'signup.html'));
};

const handleSignup = (req, res) => {
  const { username } = req.body;
  res.send(`
    <h1>WELCOME GUEST: ${username}</h1>
    <a href="/"><button>Go to Dashboard to get Started!</button></a>
  `);
};

const handleLogin = (req, res) => {
  const { username } = req.body;
  res.send(`
    <h1>WELCOME GUEST: ${username}</h1>
    <a href="/"><button>Go to Dashboard to get Started!</button></a>
  `);
};

app.get(['/', '/login'], sendLoginPage);
app.get('/signup', sendSignupPage);
app.post('/signup-submit-form', handleSignup);
app.post('/login-submit-form', handleLogin);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
