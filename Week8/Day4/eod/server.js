const http = require("http");
const fs = require("fs");

const comments = [];

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
      req.body = reqBody
        .split("&") // [affiliate=nasa,query=mars+rover%21,commit=Search]
        .map((keyValuePair) => keyValuePair.split("=")) // [[affiliate,nasa],[query,mars+rover%21],[commit,Search]]
        .map(([key, value]) => [key, value.replace(/\+/g, " ")]) // [[affiliate,nasa],[query,mars rover%21],[commit,Search]]
        .map(([key, value]) => [key, decodeURIComponent(value)]) // [[affiliate,nasa],[query,mars rover!],[commit,Search]]
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
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

    // GET /home
    if (req.method === "GET" && req.url === "/") {
      const htmlPage = fs.readFileSync("index.html", "utf-8");

      let commentList = "";

      for (const comment of comments) {
        commentList += `<p>${comment}</p>`;
      }

      const responseBody = htmlPage.replace(
        /#{comments}/,
        commentList.length ? commentList : `<p>No comments created</p>`
      );

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      return res.end(responseBody);
    }

    // POST /comments
    if (req.method === "POST" && req.url === "/comments") {
      const { comment } = req.body;

      comments.push(comment);

      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    }
    // 404
  });
});

const port = 5000;
server.listen(port, () => console.log(`server running on port ${port}`));
