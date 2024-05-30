const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";

const connection = new MongoClient(url);

async function dbConnect() {
  let result = await connection.connect();
  let db = result.db("demo");
  return db.collection("student");
}

module.exports = dbConnect;
