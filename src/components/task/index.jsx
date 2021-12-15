import styles from "./index.module.css";

export default function Task({
  list,
  task,
  title,
  isCompleted,
  id,
  toggleTaskCompleted,
  taskDelete,
}) {
  return (
    <div
      className={styles.task}
      style={
        isCompleted
          ? {
              borderLeft: "5px solid chartreuse",
            }
          : {}
      }
    >
      <p className={styles.taskTitle} onClick={() => toggleTaskCompleted(task)}>
        <span
          style={
            isCompleted
              ? {
                  textDecoration: "line-through",
                }
              : {}
          }
        >
          {title}
        </span>
      </p>
      <p className={styles.btnDelete} onClick={() => taskDelete(id)}>
        X
      </p>
    </div>
  );
}
