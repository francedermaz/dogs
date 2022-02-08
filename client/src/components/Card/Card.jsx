import { Link } from "react-router-dom";
import styles from './Card.module.css'

const Card = ({id,image,name,weight,temperament}) => {
    return(
        <div className={styles.container}>
            <Link to={`/breeds/${id}`}>
            <div className={styles.card}>
                <img alt="breed" className={styles.img} src={image}/>
                <div className={styles.info}>
                    <h1 className={styles.title}>{name[0].toUpperCase()+name.slice(1)}</h1>
                    <p className={styles.weight}>Weight: {weight} kg</p>
                    <p className={styles.temperaments}>Temperaments:</p>
                    <ul className={styles.unl}>
                        {
                            temperament?temperament.map(tp=><li className={styles.element}key={tp}>{tp}</li>):<li className={styles.element}key="none">None</li>
                        }
                    </ul>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default Card;