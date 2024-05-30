const dbConnect = require("./connection");

const updateData = async () => {
  const data = (await dbConnect()).updateOne(
    { name: "mm" },
    { $set: { name: "mohani", gender: "female" } }
  );

  if ((await data).acknowledged) {
    console.log("data updated");
  } else {
    console.log("error");
  }
  console.log(data);
};

updateData();
