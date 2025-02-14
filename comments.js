//Create web server
//Create a new web server using Express.js
//Create a new web server using Express.js
const express = require('express');
const app = express();
const port = 3000;

//Define the route for comments
app.get('/comments', (req, res) => {
  res.send('Comments route');
});

//Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});