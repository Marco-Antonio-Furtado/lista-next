import styles from "./index.module.css"

export default function Button({className, children, onClick} ){
    return(
        <div className={className}>
            <button 
            className={styles.btn}
            onClick={onClick}>
              
                {children}</button>
        </div>
    )
}