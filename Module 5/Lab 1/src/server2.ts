import express from 'express';

const app = express();
const PORT = 3001; // Specify the port for the second server

// Middleware example
app.use(express.json());

// Define routes for the second server
app.get('/api/server2', (req, res) => {
    res.send('Hello from Server 2!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server 2 is running on http://localhost:${PORT}`);
});