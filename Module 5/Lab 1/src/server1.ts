import express from 'express';

const app = express();
const PORT = 3001; // Specify the port for server 1

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello from Server 1!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server 1 is running on http://localhost:${PORT}`);
});