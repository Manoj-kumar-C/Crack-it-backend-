const fetch = require('node-fetch');

const apiUrl = 'http://localhost:3000'; // Replace with your actual API URL

const loginData = {
    username: 'manoj',
    password: 'kumar'
};
const cors = require('cors');
app.use(cors());
// Step 1: Fetch the token by logging in
fetch(`${apiUrl}/login`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
})
    .then(response => response.json())
    .then(data => {
        // Step 2: Use the obtained token to make a secure request
        const token = data.token;

        // Replace with your actual data fetch endpoint
        fetch(`${apiUrl}/data`, {
            method: 'GET',
            headers: {
                'Authorization': token,
            },
            credentials: 'include', // Include credentials (cookies, HTTP authentication)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Data fetched:', data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    })
    .catch(error => {
        console.error('Error logging in:', error);
    });
