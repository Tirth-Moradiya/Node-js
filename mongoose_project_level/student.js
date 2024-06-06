const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
});

module.exports = mongoose.model("student", studentSchema);
