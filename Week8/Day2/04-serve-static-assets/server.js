const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Your code here

  // create a route handler for serving the home page (index.html)


  // build a route handler for /static/css/application.css


  // build a route handler for /static/images/dog.jpg
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));