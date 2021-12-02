import styles from "./index.module.css";
import Button from "../button";
import Task from "../task";
import Title from "../title";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function List({ TITLE_VALUE, tasks }) {
  const [inputData, setInputData] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(tasks);

  // useEffect(() => {
  //   const kanbanFromStorage = window.localStorage.getItem("kanban");
  //   const kanbanFromStorageArr = JSON.parse(kanbanFromStorage);

  //   setList((state) => kanbanFromStorageArr[0].tasks);
  // }, []);

  // window.localStorage.setItem("list", JSON.stringify(list));

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
      setList([
        ...list,
        {
          id: uuidv4(),
          title: inputData,
          completed: false,
        },
      ]);
      setInputData("");
      window.localStorage.setItem("list", JSON.stringify(list));
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
    window.localStorage.setItem("list", JSON.stringify(newList));
  }

  function taskDelete(taskId) {
    const newList = list.filter((task) => task.id !== taskId);
    setList(newList);
    window.localStorage.setItem("list", JSON.stringify(newList));
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Title TITLE_VALUE={TITLE_VALUE} />
      </header>
      <main className={styles.main}>
        {list.map((task) => (
          <Task
            key={task.id}
            task={task}
            isCompleted={task.completed}
            title={task.title}
            id={task.id}
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
      {error && <p className={styles.requiredInput}>*Required input</p>}
    </div>
  );
}
