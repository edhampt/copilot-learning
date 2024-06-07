// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start web server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Path: comments.js
// Add a new route
app.get('/comments', (req, res) => {
  res.send('Comments page');
});

// Path: comments.js
// Add a new route
app.get('/comments/:id', (req, res) => {
  res.send(`Comment ID: ${req.params.id}`);
});

// Path: comments.js
// Add a new route
app.get('/comments/:id/:author', (req, res) => {
  res.send(`Comment ID: ${req.params.id}, Author: ${req.params.author}`);
});

// Path: comments.js
// Add a new route
app.get('/comments/:id/:author/:date', (req, res) => {
  res.send(`Comment ID: ${req.params.id}, Author: ${req.params.author}, Date: ${req.params.date}`);
});

// Path: comments.js
// Add a new route
app.get('/comments/:id/:author/:date/:text', (req, res) => {
  res.send(`Comment ID: ${req.params.id}, Author: ${req.params.author}, Date: ${req.params.date}, Text: ${req.params.text}`);
});

// Path: comments.js
// Add a new route
app.get('/comments/:id/:author/:date/:text/:likes', (req, res) => {
  res.send(`Comment ID: ${req.params.id}, Author: ${req.params.author}, Date: ${req.params.date}, Text: ${req.params.text}, Likes: ${req.params.likes}`);
});

// Path: comments.js
// Add a new route
app.get('/comments/:id/:author/:date/:text/:likes/:dislikes', (req, res) => {
  res.send(`Comment ID: ${req.params.id}, Author: ${req.params.author}, Date: ${req.params.date}, Text: ${req.params.text}, Likes: ${req.params.likes}, Dislikes: ${req.params.dislikes}`);
});

