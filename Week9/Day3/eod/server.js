const http = require("http");
const fs = require("fs");

const comments = ["test"];

const server = http.createServer((req, res) => {
  let reqBody = "";

  req.on("data", (data) => {
    // affiliate=nasa&query=mars+rover&commit=Search
    reqBody += data;
  });

  // When the request is finished processing the entire body
  req.on("end", () => {
    // Parsing the body of the request
    if (reqBody) {
      // "affiliate=nasa&query=mars+rover%21&commit=Search"
      if (req.headers["content-type"] === "application/json") {
        req.body = JSON.parse(reqBody);
      } else {
        req.body = reqBody
          .split("&") // [affiliate=nasa,query=mars+rover%21,commit=Search]
          .map((keyValuePair) => keyValuePair.split("=")) // [[affiliate,nasa],[query,mars+rover%21],[commit,Search]]
          .map(([key, value]) => [key, value.replace(/\+/g, " ")]) // [[affiliate,nasa],[query,mars rover%21],[commit,Search]]
          .map(([key, value]) => [key, decodeURIComponent(value)]) // [[affiliate,nasa],[query,mars rover!],[commit,Search]]
          .reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
          }, {});
      }
      console.log(req.body); // {affiliate:nasa,query:mars rover!,commit:Search}}
    }
    // Do not edit above this line

    // GET /static assets
    if (req.method === "GET" && req.url === "/static/index.css") {
      const responseBody = fs.readFileSync("index.css", "utf-8");

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/css");
      return res.end(responseBody);
    }

    if (req.method === "GET" && req.url === "/static/index.js") {
      const responseBody = fs.readFileSync("index.js", "utf-8");

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/javascript");
      return res.end(responseBody);
    }

    // GET /home
    if (req.method === "GET" && req.url === "/") {
      const responseBody = fs.readFileSync("index.html", "utf-8");

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      return res.end(responseBody);
    }

    if (req.method === "GET" && req.url === "/comments") {
      const responseBody = JSON.stringify({ comments });

      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      return res.end(responseBody);
    }

    // POST /comments
    if (req.method === "POST" && req.url === "/comments") {
      const { comment } = req.body;

      comments.push(comment);

      const responseBody = JSON.stringify({ comment });
      res.statusCode = 201;
      res.setHeader("Content-Type", "application/json");
      return res.end(responseBody);
    }
    // 404
  });
});

const port = 5000;
server.listen(port, () => console.log(`server running on port ${port}`));
