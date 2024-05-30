const dbConnect = require("./connection");

const deleteData = async () => {
  const data = await (await dbConnect()).deleteOne({ name: "mohani" });

  if (data.acknowledged) {
    console.log("data deleted");
  } else {
    console.log("error");
  }
  console.log(data);
};

deleteData();
