import styles from "./index.module.css";
import List from "../list";
import ButtonHeader from "../button-header";
import { v4 as uuid } from "uuid";

export default function Header({ kanban, setKanban }) {
  const newKanban = [...kanban, <List INITIAL_VALUE={[]} key={uuid()} />];

  function changeKanban() {
    setKanban(newKanban);
  }

  return (
    <div className={styles.head}>
      <ButtonHeader className={styles.addList} onClick={changeKanban}>
        +Add List
      </ButtonHeader>
    </div>
  );
}
