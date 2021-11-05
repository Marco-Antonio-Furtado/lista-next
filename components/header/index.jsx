import styles from "./index.module.css"
import List from "../list"
import ButtonHeader from "../button-header"

export default function Header({kanban, setKanban}){
    const newKanban =  [...kanban, <List/>]
    
    function changeKanban(){setKanban(newKanban)}
    
    return(
        
        <div className={styles.head}>
            
            <ButtonHeader className={styles.addList} onClick={changeKanban}>+Add List</ButtonHeader>
        </div>
    )
}