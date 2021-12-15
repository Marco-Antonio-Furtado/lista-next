import styles from "./index.module.css";
import ButtonHeader from "../buttonHeader";
import { v4 as uuid } from "uuid";
import { useKanban } from "../../context/Kanban";

export default function Header() {
  const { kanban, addList } = useKanban();

  const newList = {
    id: uuid(),
    name: "",
    tasks: [],
  };

  return (
    <div className={styles.head}>
      <ButtonHeader className={styles.addList} onClick={() => addList(newList)}>
        +Add List
      </ButtonHeader>
    </div>
  );
}
