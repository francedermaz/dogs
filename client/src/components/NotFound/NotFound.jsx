import dognotfound from "./images/dognotfound.gif"
import styles from "./NotFound.module.css";

const NotFound = () => {
    return(
        <div className={styles.content}>
            <h1 className={styles.title}>Breed not found</h1>
            <img className={styles.notfound} src={dognotfound} alt='notfound'/>
        </div>
    )
}

export default NotFound;