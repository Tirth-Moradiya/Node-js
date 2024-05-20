const http = require("http");
const Color = require("colors");

http
  .createServer((req, res) => {
    res.write("<h1>this is demo for create server</h1>");
    res.end();
  })
  .listen(4500);
