// grabbing http module to make server etc

const http = require("http");

// create server method looks for callback
// first paremeter is incoming request

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  res.end(`
    <h1>Oops!</h1>
    <p> We can't seem to find the page you are looking for </p>
    <a href = "/"> back home </a>
   `);
  console.log(req);
  res.write("Welcome to our home page");
  res.end();
});
server.listen(2000);
