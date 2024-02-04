const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

const secretKey = 'your-secret-key'; // Replace with your actual secret key

// Sample data
const data = [
    { id: 1, title: 'Data 1', value: 'Value 1' },
    { id: 2, title: 'Data 2', value: 'Value 2' },
    // Add more data as needed
];

// Middleware for JSON parsing
app.use(bodyParser.json());

// Middleware for JWT authentication
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ error: 'Unauthorized' });

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.status(403).json({ error: 'Forbidden' });
        req.user = user;
        next();
    });
};

// API endpoint for authentication
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Replace this with your actual authentication logic
    if (username === 'manoj' && password === 'kumar') {
        const token = jwt.sign({ username }, secretKey);
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

// API endpoint for fetching data (requires authentication)
app.get('/data', authenticateToken, (req, res) => {
    res.json(data);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
