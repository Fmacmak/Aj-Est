const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + './public/index.html');
});

app.post('/verify', (req, res) => {
    // Handle verification process
    // Example: Check if provided code is valid
    const { code } = req.body;
    // Perform verification logic
    res.send(/* Response based on verification result */);
});

// Function to generate a random 6-digit code
function generateCode() {
    return Math.floor(100000 + Math.random() * 900000);
}

app.post('/generate', (req, res) => {
    // Generate a 6-digit code
    const generatedCode = generateCode();
    res.send(generatedCode.toString());
});

app.get('/logs', (req, res) => {
    // Retrieve and send logs data
    // Example: Read logs from a file or database
    const logs =[] /* Logic to retrieve logs */;
    res.send(logs);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
