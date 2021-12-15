import { useState } from "react";
import styles from "./index.module.css";
import { useKanban } from "../../context/Kanban";

export default function Title({ list, titleValue }) {
  const [inputData, setInputData] = useState(titleValue);
  const { handleTitle } = useKanban();

  handleTitle(list, inputData);

  function handleInputData(e) {
    setInputData(e.target.value);
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
