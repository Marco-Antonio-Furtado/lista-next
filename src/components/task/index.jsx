import styles from "./index.module.css"

export default function Task({ task, handleTaskClick, taskDelete }){
    return(
        <div className={styles.task}
        style={task.completed ? { borderLeft: "5px solid chartreuse" } : {}}>
            <p className={styles.taskTitle}  onClick={()=>handleTaskClick(task)} >{task.title}</p>
            <p className={styles.btnDelete} onClick={() =>taskDelete(task.id)}>X</p>
        </div>
    )
}