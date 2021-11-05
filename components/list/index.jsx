import styles from "./index.module.css"
import Button from "../button"
import Task from "../task"
import { useState } from "react"
import { v4 as uuidv4} from "uuid"

export default  function List(){
    const [inputData, setInputData] = useState("")
    const [error, setError] = useState(false)

    function handleInputData(e)
    {setInputData(e.target.value)}

    function handleEnter(e){
        if (e.keyCode !== 13){return}
        else {addTask()}
         
    }

    function handleTaskClick(task){
        if(task.id){task.completed = !task.completed}else{return}
        const newList = [...list]
        setList(newList)
    }

    function taskDelete(taskId){
        console.log(taskId)
        const newList = list.filter((task)=>task.id !== taskId)
        setList(newList)

    }


    const [list, setList] = useState(
        
        [
            {
                id: uuidv4(),
                title: "Something",
                completed: true,
             },
             {
                 id: uuidv4(),
                 title: "Other thing",
                 completed: false
             },
         ]
     )
     function addTask(){
         setError(false)
         if(inputData===""){setError(true)}
         else{
         const newList = [...list, 
             {
                 id:uuidv4(),
                 title:inputData,
                 completed:false,
             }    
         ]
         setList(newList)
         setInputData("")
        }
     } 

        
        return(
    <div className={styles.wrapper}>
        <header className={styles.header}>
            <input 
            value={inputData} 
            className={styles.input} 
            onChange={handleInputData}
            onKeyUp={handleEnter}/>
            {/* \/\/ className \/\/ funciona??? */}
            <Button className={styles.btnAdd} onClick={addTask}>Submit</Button>
        </header>
        <main className={styles.main}>
            {error && <p className={styles.requiredInput}>*Required input</p>}
            {list.map((task)=><Task key={task.id} task={task} 
            handleTaskClick={handleTaskClick} 
            taskDelete={taskDelete}/>)}
        </main>
    </div>
    )
}