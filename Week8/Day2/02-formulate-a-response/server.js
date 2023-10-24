// Your code here
const http = require("http");

const server = http.createServer((req, res) => {
  // server responses here

  /*
    get response body

    set statusCode

    set header

    res.write() <-- passing in the response body
    and res.end()
    or
    res.end() <-- passing in the response body

  */
  if (req.method === "GET" && req.url === "/") {
    const responseBody = `
       <!DOCTYPE html>
       <html lang="en">
       <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Hello World!</title>
       </head>
       <body>
         <h1>Hello there!</h1>
       </body>
       </html>
     `;

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html"); // {}
    return res.end(responseBody);
  }

  if(req.method === 'POST' && req.method === '/dogs'){
    // create a dog
    // redirect to /dogs
  }
});

const port = 5000;
server.listen(port, () => console.log(`server is listening on port ${port}`));
