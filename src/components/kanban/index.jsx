import { useState, useEffect } from "react";
import styles from "./index.module.css";
import List from "../list";
import AddTitle from "../addTitle";
import { useKanban } from "../../context/Kanban";
import { v4 as uuid } from "uuid";

export default function Kanban() {
  const { kanban, setKanban } = useKanban();
  useEffect(() => {
    let kanbanFromStorage = JSON.parse(localStorage.getItem("kanban"));
    let kanbanValue = kanbanFromStorage ? kanbanFromStorage : kanban;
    setKanban(kanbanValue);
    window.localStorage.setItem("kanban", JSON.stringify(kanban));
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.kanban}>
        {kanban.map((list) => (
          <List list={list} key={uuid()} />
        ))}
      </div>
      <div>
        <AddTitle />
      </div>
    </div>
  );
}
