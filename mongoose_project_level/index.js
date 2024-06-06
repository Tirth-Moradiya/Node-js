const express = require("express");
require("./config");
const Student = require("./student");

const app = express();
app.use(express.json());

app.post("/create", async (req, resp) => {
  let data = new Student(req.body);
  let result = await data.save();
  console.log(result);
  resp.send(result);
});

app.listen(2200);
