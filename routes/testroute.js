const express = require("express");
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const farts = require("../apis/fart.json")

const secretKey = 'your-secret-key'; // Replace with your actual secret key

// Sample users for demonstration (replace with your actual user authentication logic)
const users = [
    { id: 1, username: 'manoj', password: 'kumar' },
    
];

const authenticateUser = (username, password) => {
    return users.find(user => user.username === username && user.password === password);
};

const generateToken = (user) => {
    return jwt.sign({ userId: user.id, username: user.username }, secretKey);
};

const verifyToken = (token) => {
    return jwt.verify(token, secretKey);
};

const songs = [
    { id: 1, title: 'Song 1', audioFile: 'https://github.com/Manoj-kumar-C/Storage-of-Meme-App/releases/download/0.1/1.mp3' },
    { id: 2, title: 'NO god plz no', audioFile: 'https://github.com/Manoj-kumar-C/Storage-of-Meme-App/releases/download/0.1/10.mp3' },
    // Add more song data as needed
];

const animals = [
    // Your animal data here
];

const popular = [
    // Your popular data here
];

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = authenticateUser(username, password);

    if (user) {
        const token = generateToken(user);
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

// Middleware to verify JWT token
const verifyTokenMiddleware = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const decoded = verifyToken(token);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ error: 'Forbidden' });
    }
};

// Secure routes with JWT authentication
app.get('/', verifyTokenMiddleware, (req, res) => { 
    res.json(songs);
    console.log("Works Fine");
});

app.get('/animals', verifyTokenMiddleware, (req, res) => { 
    res.json(animals);
    console.log(" Animal Works Fine");
});

app.get('/popular', verifyTokenMiddleware, (req, res) => { 
    res.json(popular);
    console.log("Popular Works Fine");
});

app.get('/farts', verifyTokenMiddleware, (req, res) => {
    res.json(farts);
    console.log("Viral Works  Fine");
});

app.get('/viral', verifyTokenMiddleware, (req, res) => {
    res.json(viral);
    console.log("Viral Works Fine");
});

app.listen(3000, () => { console.log("Server is running on http://localhost:3000"); });
