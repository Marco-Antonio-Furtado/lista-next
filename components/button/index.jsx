import styles from "./index.module.css"

export default function Button(props){
    return(
        <div {...props}>
            <button className={styles.btn}>Adicionar</button>
        </div>
    )
}