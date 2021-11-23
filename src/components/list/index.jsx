import styles from "./index.module.css";
import Button from "../button";
import Task from "../task";
import Title from "../title";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function List({ INITIAL_VALUE }) {
  const [inputData, setInputData] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(INITIAL_VALUE);

  function handleInputData(e) {
    setInputData(e.target.value);
  }

  function handleEnter(e) {
    if (e.keyCode !== 13) {
      return;
    } else {
      addTask();
    }
  }

  function addTask() {
    setError(false);
    if (inputData === "") {
      setError(true);
    } else {
      list.push({
        id: uuidv4(),
        title: inputData,
        completed: false,
      });
      setInputData("");
    }
  }

  function handleTaskClick(task) {
    if (task.id) {
      task.completed = !task.completed;
    } else {
      return;
    }
    const newList = [...list];
    setList(newList);
  }

  function taskDelete(taskId) {
    const newList = list.filter((task) => task.id !== taskId);
    setList(newList);
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Title />
      </header>
      <main className={styles.main}>
        {error && <p className={styles.requiredInput}>*Required input</p>}
        {list.map((task) => (
          <Task
            key={task.id}
            task={task}
            handleTaskClick={handleTaskClick}
            taskDelete={taskDelete}
          />
        ))}
      </main>
      <footer className={styles.footer}>
        <input
          value={inputData}
          className={styles.input}
          onChange={handleInputData}
          onKeyUp={handleEnter}
        />
        <Button onClick={addTask}>Submit</Button>
      </footer>
    </div>
  );
}
