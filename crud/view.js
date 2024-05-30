const dbConnect = require("./connection");

const fetchData = async () => {
  let data = await (await dbConnect()).find().toArray();
  console.log(data);
};

// //where condition
// const fetchData = async () => {
//   let data = await (await dbConnect()).find({name:"tirth"}).toArray();
//   console.log(data);
// };

fetchData();
