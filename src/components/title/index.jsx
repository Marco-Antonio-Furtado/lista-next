import { useState } from "react";
import styles from "./index.module.css";

export default function Title() {
  const [inputData, setInputData] = useState("To Do");

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
