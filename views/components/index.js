const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");

const publicPath = path.join(__dirname, "public");

// app.use(express.static(publicPath));

//static html page routing
app.get("", (req, resp) => {
  resp.sendFile(`${publicPath}/index.html`);
});

app.get("/about", (req, resp) => {
  resp.sendFile(`${publicPath}/about.html`);
});

// app.get("*", (req, resp) => {
//   resp.sendFile(`${publicPath}/error404.html`);
// });

//route dynamic ejs page
app.get("/profile", (req, resp) => {
  const user = [
    {
      name: "Tirth",
      email: "tirth@gmail.com",
      age: "20",
    },
    {
      name: "TM",
      email: "tm@gmail.com",
      age: "30",
    },
  ];
  resp.render("profile", { user });
});

app.get("/login", (req, resp) => {
  resp.render("login");
});

app.listen(5000);
