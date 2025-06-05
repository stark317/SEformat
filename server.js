const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML/CSS/JS)
app.get("/", (req, res) => {
     res.sendFile(path.join(__dirname, "seformat.html")); // Serve the HTML file
    });


app.use(express.static("."));

// Dummy user
const USER = {
  email: "user@example.com",
  password: "password123"
};

// Route for the login page
app.post('/login', (req, res) => {
    const { email, password } = req.body;    // Extract data from the form
    console.log('Login received:');
    console.log('Email:', email);
    console.log('Password:', password);
    res.send('processing request...');         // Send a response back to the browser
});

// Start server
app.listen(PORT,'0.0.0.0', () => {
  console.log(`Server running at http://localhost:${PORT}`);
});