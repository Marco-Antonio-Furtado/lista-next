const express = require("express");
const mongoose = require("mongoose");
const app = express();
const TasksModel = require("./models/Tasks");

app.use(express.json());

mongoose.connect(
  "mongodb+srv://marco:7zq86bfFbtcFRPz3@lista-next.mnbgg.mongodb.net/tasks?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.get("/", async (req, res) => {
  const tasks = new TasksModel({
    taskTitle: "something",
    taskId: "7779-c891",
    taskCompleted: false,
  });

  try {
    await tasks.save();
  } catch (err) {
    console.log(err);
  }
});

app.listen(3001, () => {
  console.log("Server is running");
});
