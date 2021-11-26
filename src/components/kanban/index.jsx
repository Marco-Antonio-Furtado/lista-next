import { useState } from "react";
import styles from "./index.module.css";
import List from "../list";
import { v4 as uuid } from "uuid";
import Button from "@mui/material/Button";

export default function Kanban({ kanban, setKanban }) {
  const newKanban = [...kanban, <List INITIAL_VALUE={[]} key={uuid()} />];
  const [close, setClose] = useState(true);

  function changeKanban() {
    setKanban(newKanban);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.kanban}>{kanban}</div>
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
