const express = require('express');
const app = express();
const PORT = 3001; // Change the port to 3000

app.get('/', (req, res) => { // Define a route handler for the root URL
    res.send('Hello, this is the root of the API.'); // Send a simple response
});

app.get('/data', (req, res) => {
    res.json({ message: 'Server data' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});