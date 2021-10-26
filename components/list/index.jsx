import styles from "./index.module.css"
import Button from "../button"
import Task from "../task"

export default  function List(){
    return(
    <div className={styles.wrapper}>
        <header className={styles.header}>
            <input className={styles.input}/>
            <Button className={styles.btnAdd} />
        </header>
        <main className={styles.main}>
            {[1, 2, 3].map((n, i)=><Task key={i} />)}
        </main>
    </div>
    )
}