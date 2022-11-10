var path = require('path');
var express = require('express');

var app = express();

// Module additions:
// API
// Private routes
// Authentication middleware

// Serve static files
app.use(
  express.static(path.join(__dirname, '/public'), {
    index: ['index.html'],
    extensions: ['html'],
    fallthrough: true,
  })
);

// Upon failure, serve 404 page
app.all('*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '/public/404/index.html'));
});

app.listen(3000, () => {
  console.log(`listening on port 3000`);
});
