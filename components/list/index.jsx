import styles from "./index.module.css"
import Button from "../button"
import Task from "../task"
import { useState } from "react"

export default  function List(){
    const [inputData, setInputData] = useState("")
    function handleInputData(e)
    {setInputData(e.target.value)}
    console.log(inputData)

    return(
    <div className={styles.wrapper}>
        <header className={styles.header}>
            <input className={styles.input} onChange={handleInputData}/>
            <Button className={styles.btnAdd} />
        </header>
        <main className={styles.main}>
            {[1, 2, 3].map((n, i)=><Task key={i} />)}
        </main>
    </div>
    )
}