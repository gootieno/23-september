const http = require("http");

let nextDogId = 1;

function getNewDogId() {
  const newDogId = nextDogId;
  nextDogId++;
  return newDogId;
}

const server = http.createServer((req, res) => {
  // console.log('request object ', req)
  console.log(`${req.method} ${req.url}`);

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

    // define route handlers here
    if (req.method === "GET" && req.url === "/") {
      const responseBody = "Dog Club";

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      return res.end(responseBody);
    }

    let urlStrings = req.url.split("/");

    if (req.method === "GET" && urlStrings[1] === "dogs") {
      const dogId = urlStrings[2];
      // const responseBody = dogId
      //   ? `Dog details for dogId: ${dogId}`
      //   : "Dog Index";

      let responseBody;

      if (!dogId) responseBody = "Dog Index";
      else if (dogId !== "new")
        responseBody = `Dog details for dogId: ${dogId}`;
      else responseBody = "Dog create form page";

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      return res.end(responseBody);
    }
    // if (req.method === "GET" && req.url === "/dogs") {
    //   const responseBody = "Dogs Index";

    //   res.statusCode = 200;
    //   res.setHeader("Content-Type", "text/plain");
    //   return res.end(responseBody);
    // }
    if (req.method === "POST" && req.url === "/dogs") {
      const dogId = getNewDogId();
      
      res.statusCode = 302;
      res.setHeader("Location", `/dogs/${dogId}`);
      return res.end();
    }

    // Do not edit below this line
    // Return a 404 response when there is no matching route handler
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    return res.end("No matching route handler found for this endpoint");
  });
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
