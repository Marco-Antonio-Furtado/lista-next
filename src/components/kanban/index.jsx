import { useState, useEffect } from "react";
import styles from "./index.module.css";
import List from "../list";
import AddTitle from "../addTitle";

//The kanban useState is located on src/pages/index.js
export default function Kanban({ kanban, setKanban }) {
  useEffect(() => {
    const kanbanFromStorage = window.localStorage.getItem("kanban");
    const kanbanFromStorageArr = JSON.parse(kanbanFromStorage);

    setKanban((state) => kanbanFromStorageArr);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.kanban}>
        {kanban.map((list) => (
          <List TITLE_VALUE={list.name} key={list.id} tasks={list.tasks} />
        ))}
      </div>
      <div>
        <AddTitle kanban={kanban} setKanban={setKanban} />
      </div>
    </div>
  );
}

// const INITIAL_VALUE = [
//   {
//     id: uuid(),
//     name: "To Do",
//     tasks: [
//       {
//         id: uuid(),
//         title: "Something",
//         completed: true,
//       },
//       {
//         id: uuid(),
//         title: "Other thing",
//         completed: false,
//       },
//     ],
//   },
//   {
//     id: uuid(),
//     name: "Doing",
//     tasks: [
//       {
//         id: uuid(),
//         title: "Another thing",
//         completed: true,
//       },
//       {
//         id: uuid(),
//         title: "Thing 4",
//         completed: false,
//       },
//     ],
//   },
// ];
