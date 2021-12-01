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
          <List
            INITIAL_VALUE={list.tasks}
            TITLE_VALUE={list.name}
            key={list.id}
          />
        ))}
      </div>
      <div>
        <div className={close ? styles.container : styles.containerMod}>
          {close ? (
            <div>
              <button
                className={styles.btnAddList}
                onClick={() => setClose(!close)}
              >
                + Add list
              </button>
            </div>
          ) : (
            <div className={styles.box}>
              <input
                className={styles.iptAddList}
                onBlur={() => setClose(!close)}
                autoFocus
              />
              <div className={styles.btnMUI}>
                <Button variant="contained" onClick={() => setClose(!close)}>
                  + Add
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
