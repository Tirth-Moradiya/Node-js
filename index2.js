const express = require("express");
const app = express();
const reqFilter = require("./middleware");

// app.use(reqFilter);   //application base route

//dynamic rout
app.get("/", (req, resp) => {
  resp.send("home page");
});

app.get("/about", reqFilter, (req, resp) => {
  resp.send("about page");
});

app.listen(2000);
