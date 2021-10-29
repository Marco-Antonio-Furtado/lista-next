import styles from "./index.module.css"

export default function Task({ task }){
    return(
        <div className={styles.task}>
            {task.title}
        </div>
    )
}