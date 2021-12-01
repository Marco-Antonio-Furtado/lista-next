import styles from "./index.module.css";
import List from "../list";
import ButtonHeader from "../buttonHeader";
import { v4 as uuid } from "uuid";

export default function Header({ kanban, setKanban }) {
  function newList() {
    const newKanban = [
      ...kanban,
      {
        id: uuid(),
        name: "",
        tasks: [],
      },
    ];
    setKanban(newKanban);
    window.localStorage.setItem("kanban", JSON.stringify(kanban));
  }

  return (
    <div className={styles.head}>
      <ButtonHeader className={styles.addList} onClick={newList}>
        +Add List
      </ButtonHeader>
    </div>
  );
}
