const dbConnect = require("./connection");

const insertData = async () => {
  const db = await (
    await dbConnect()
  ).insertOne({
    name: "mm",
    age: "20",
    gender: "female",
  });
  if (db.acknowledged) {
    console.log("data inserted");
  } else {
    console.log("error");
  }
  console.log(db);
};

insertData();
