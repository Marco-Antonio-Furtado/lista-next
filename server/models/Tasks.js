const mongoose = require("mongoose");

const tasksSchema = new mongoose.Schema({
  taskTitle: {
    type: String,
    required: true,
  },
  taskId: {
    type: String,
    required: true,
  },
  taskCompleted: {
    type: Boolean,
    required: true,
  },
});

const Tasks = mongoose.model("tasksData", tasksSchema);
module.exports = Tasks;
