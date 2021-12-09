import { useState, useEffect } from "react";
import styles from "./index.module.css";
import List from "../list";
import AddTitle from "../addTitle";
import { useKanban } from "../../context/Kanban";

//The kanban useState is located on src/pages/index.js
export default function Kanban() {
  const { kanban, setKanban } = useKanban();
  useEffect(() => {
    // const kanbanFromStorage = window.localStorage.getItem("kanban");
    // const kanbanFromStorageArr = JSON.parse(kanbanFromStorage);
    // setKanban((state) => kanbanFromStorageArr);
    window.localStorage.setItem("kanban", JSON.stringify(kanban));
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
