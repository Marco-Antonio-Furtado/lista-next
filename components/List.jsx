import styles from "../styles/list.module.css"
import Button from "../components/Button"
import Task from "../components/Task"

export default  function List(){
    return(
    <div className={styles.container}>
        <div className={styles.innerContainer}>
            
            <input className={styles.input}/>
            <div className={styles.btnAdd}>
                <Button />
            </div>
            
        </div>
        <Task />
    </div>
    )
}