const express = require("express");
const mongoDb = require("mongodb");
const dbConnect = require("../crud/connection");

const app = express();
app.use(express.json());

app.get("/", async (req, resp) => {
  let data = await (await dbConnect()).find().toArray();
  console.log(data);
  resp.send(data);
});

app.post("/", async (req, resp) => {
  let data = await (await dbConnect()).insertOne(req.body);
  resp.send(data);
});

app.put("/:name", async (req, resp) => {
  let data = await (
    await dbConnect()
  ).updateOne({ name: req.params.name }, { $set: req.body });
  resp.send(data);
});

app.delete("/:id", async (req, resp) => {
  let data = (await dbConnect()).deleteOne({
    _id: new mongoDb.ObjectId(req.params.id),
  });
  resp.send(data);
});

app.listen(5000);
