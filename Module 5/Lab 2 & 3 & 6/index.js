const express = require('express');
const app = express();
const port = 3000;

// import all calculator routes (up the top)
const calculatorRoutes = require('./routes/calculatorRoutes');

// map the calculator routes to our app
app.use('/calculator', calculatorRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});