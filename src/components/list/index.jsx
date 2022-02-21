import styles from "./index.module.css";
import Button from "../button";
import Task from "../task";
import Title from "../title";
import { useEffect, useState } from "react";
import { useKanban } from "../../context/Kanban";
import { v4 as uuidv4 } from "uuid";

export default function List(list) {
  const { kanban, addTask, taskDelete, updateKanban } = useKanban();

  const [inputData, setInputData] = useState("");
  const [error, setError] = useState(false);

  //for some reason list is inside list. Fix this later

  list = list.list;
  let tasks = list.tasks;

  function handleInputData(e) {
    setInputData(e.target.value);
  }

  function handleSubmit(e) {
    setError(false);
    if (inputData === "") {
      setError(true);
      e.preventDefault();
    } else {
      const task = {
        id: uuidv4(),
        title: inputData,
        completed: false,
      };
      addTask(list, task);
      setInputData("");
    }
  }

  function toggleTaskCompleted(task) {
    if (task.id) {
      task.completed = !task.completed;
      updateKanban();
    }
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Title list={list} titleValue={list.name} />
      </header>
      <main className={styles.main}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            list={list}
            task={task}
            isCompleted={task.completed}
            title={task.title}
            id={task.id}
            toggleTaskCompleted={toggleTaskCompleted}
            taskDelete={taskDelete}
          />
        ))}
      </main>
      <footer>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            value={inputData}
            className={styles.input}
            onChange={handleInputData}
          />
          <Button type="submit">Submit</Button>
        </form>
      </footer>
      {error && <p className={styles.requiredInput}>*Required input</p>}
    </div>
  );
}
