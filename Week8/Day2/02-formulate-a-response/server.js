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
});

const port = 5000;
server.listen(port, () => console.log(`server is listening on port ${port}`));
