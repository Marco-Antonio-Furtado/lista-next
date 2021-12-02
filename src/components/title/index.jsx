import { useState } from "react";
import styles from "./index.module.css";

export default function Title({ TITLE_VALUE }) {
  const [inputData, setInputData] = useState(TITLE_VALUE);

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
