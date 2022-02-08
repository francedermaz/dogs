import Card from '../Card/Card';
import styles from './Cards.module.css'

const Cards = ({alldogs}) => {
    return(
        <div className={styles.cards}>
            {alldogs.map(el=>{
                let {id,name,image,weight,temperament} = el;
                return <Card key={id} id={id} image={image} name={name} weight={weight} temperament={temperament}/>
            })}
        </div>
    )
}

export default Cards;