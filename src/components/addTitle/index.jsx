import { useState, useRef } from "react";
import styles from "./index.module.css";
import { v4 as uuid } from "uuid";
import Button from "@mui/material/Button";
import { useKanban } from "../../context/Kanban";

export default function AddTitle() {
  const { kanban, setKanban } = useKanban();

  const [inputData, setInputData] = useState("");
  const [close, setClose] = useState(true);

  function handleInputData(e) {
    setInputData(e.target.value);
  }

  function newList() {
    const newKanban = [
      ...kanban,
      {
        id: uuid(),
        name: inputData,
        tasks: [],
      },
    ];
    setKanban(newKanban);
    window.localStorage.setItem("kanban", JSON.stringify(kanban));
    setInputData("");
  }

  function handleEnter(e) {
    if (e.keyCode == 13) {
      newList();
    }
  }

  function handleBlur(e) {
    setTimeout(() => {
      setClose(!close);
    }, 100);
  }

  return (
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
              onChange={handleInputData}
              onKeyUp={(e) => handleEnter(e)}
              onBlur={(e) => handleBlur(e)}
              value={inputData}
              autoFocus
            />
            <div className={styles.btnMUI}>
              <Button variant="contained" onClick={newList}>
                + Add
              </Button>
              <Button onClick={() => setClose(!close)}>X</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
