import styles from "./index.module.css"

export default function Task({ task, onClick }){
    return(
        <div className={styles.task}
        style={task.completed ? { borderLeft: "5px solid chartreuse" } : {}}>
            <p className={styles.taskTitle}  onClick={onClick(task.id)} >{task.title}</p>
        </div>
    )
}