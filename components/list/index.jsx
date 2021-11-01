import styles from "./index.module.css"
import Button from "../button"
import Task from "../task"
import { useState } from "react"

export default  function List(){
    const [inputData, setInputData] = useState("")
    
    function handleInputData(e)
    {setInputData(e.target.value)}

    function handleEnter(e){
        if (e.keyCode !== 13){return}
        else {addtask()}
         
    }

    const [list, setList] = useState(
        
        [
            {
                id: 1,
                title: "Something",
                completed: true,
             },
             {
                 id: 2,
                 title: "Other thing",
                 completed: false
             },
         ]
     )
     function addtask(){
         const newList = [...list, 
             {
                 id:3,
                 title:inputData,
                 completed:false,
             }    
         ]
         setList(newList)
         setInputData("")
     } 

        
        return(
    <div className={styles.wrapper}>
        <header className={styles.header}>
            <input 
            value={inputData} 
            className={styles.input} 
            onChange={handleInputData}
            onKeyUp={handleEnter}/>
            <Button className={styles.btnAdd} onClick={addtask}>Adicionar</Button>
        </header>
        <main className={styles.main}>
            {list.map((task, i)=><Task key={i} task={task} />)}
        </main>
    </div>
    )
}