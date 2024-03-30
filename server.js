const express = require('express');
const app = express();
const port = 3000; // You can use any port that's free on your system

// Serve static files from a specified directory (e.g., 'public')
app.use(express.static('public'));

// Basic route for your homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
