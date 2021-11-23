import react, { useState } from "react";
import styles from "./index.module.css";
import List from "../list";

export default function Kanban({ kanban }) {
  return <div className={styles.kanban}> {kanban}</div>;
}
