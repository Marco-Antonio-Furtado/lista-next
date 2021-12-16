import { useState } from "react";
import styles from "./index.module.css";
import { useKanban } from "../../context/Kanban";

export default function Title({ list, titleValue }) {
  const [inputData, setInputData] = useState(titleValue);
  const { handleTitle } = useKanban();

  function handleInputData(e) {
    const title = e.target.value;
    setInputData(title);
    handleTitle(list, title);
  }

  return (
    <div>
      <input
        className={styles.title}
        onChange={handleInputData}
        value={inputData}
      />
    </div>
  );
}
