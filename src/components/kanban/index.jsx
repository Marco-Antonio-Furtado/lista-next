import { useState, useEffect } from "react";
import styles from "./index.module.css";
import List from "../list";
import AddTitle from "../addTitle";
import { useKanban } from "../../context/Kanban";
import { v4 as uuid } from "uuid";

export default function Kanban() {
  const { kanban, setKanban } = useKanban();

  useEffect(() => {
    let kanbanFromStorage = localStorage.getItem("kanban");
    let parsedKanban = JSON.parse(kanbanFromStorage);
    let kanbanValue = kanbanFromStorage ? parsedKanban : kanban;
    setKanban(kanbanValue);
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
