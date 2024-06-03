const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/demo");

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
});

const addRecord = async () => {
  const studentModel = mongoose.model("student", studentSchema);
  let data = new studentModel({ name: "dsbfdj", age: 33, gender: "male" });
  let result = await data.save();
  console.log(result);
};

const updateRecord = async () => {
  const studentModel = mongoose.model("student", studentSchema);
  let data = await studentModel.updateOne(
    { name: "tirth" },
    { $set: { name: "tirthmoradiya" } }
  );
  console.log(data);
};

const deleteRecord = async () => {
  const studentModel = mongoose.model("student", studentSchema);
  let data = await studentModel.deleteOne({ name: "mahi" });
  console.log(data);
};

const findRecord = async () => {
  const studentModel = mongoose.model("student", studentSchema);
  let data = await studentModel.find({ name: "tirth" });
  console.log(data);
};

findRecord();
