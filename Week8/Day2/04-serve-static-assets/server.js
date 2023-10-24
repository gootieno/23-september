const http = require("http");
const fs = require("fs");

const getContentType = (ext) => {
  switch (ext) {
    case "css":
      return "text/css";
    case "jpg":
      return "image/jpg";
    default:
      return "text/plain";
  }
};

const server = http.createServer((req, res) => {
  // Your code here

  // create a route handler for serving the home page (index.html)
  if (req.method === "GET" && req.url === "/") {
    const responseBody = fs.readFileSync("index.html", "utf-8");

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    return res.end(responseBody);
  }

  // build a route handler for /static/css/application.css
  // if (req.method === "GET" && req.url === "/static/css/application.css") {
  //   const responseBody = fs.readFileSync("./assets/css/application.css");

  //   res.statusCode = 200;
  //   res.setHeader("Content-Type", "text/css");
  //   return res.end(responseBody);
  // }
  // build a route handler for /static/images/dog.jpg
  // if (req.method === "GET" && req.url === "/static/images/dog.jpg") {
  //   const responseBody = fs.readFileSync("./assets/images/dog.jpg");

  //   res.statusCode = 200;
  //   res.setHeader("Content-Type", "image/jpg");
  //   return res.end(responseBody);
  // }
  if (req.method === "GET" && req.url.startsWith("/static")) {
    console.log("request url ", req.url);
    const urlParts = req.url.split("/static");
    console.log("url parts ", urlParts);

    const assetPath = urlParts[1];
    console.log("asset path ", assetPath);

    const fileExt = assetPath.split(".")[1];
    console.log("file ext ", fileExt);

    const responseBody = fs.readFileSync(`./assets${assetPath}`);

    const contentType = getContentType(fileExt);
    res.statusCode = 200;
    res.setHeader("Content-Type", contentType);
    return res.end(responseBody);
  }
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));


// nodemon
// npm init -y && npm i nodemon
// package.json -> "start": "nodemon server.js"