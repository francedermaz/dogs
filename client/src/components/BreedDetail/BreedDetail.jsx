import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getDogID } from '../../redux/actions';
import Loader from '../Loader/Loader';
import NavBar from '../NavBar/NavBar';
import SocialMedia from '../SocialMedia/SocialMedia';
import arrowleft from './images/arrowleft.png';
import styles from './BreedDetail.module.css';

const BreedDetail = () => {
    const dispatch = useDispatch();
    let {id} = useParams();

    const [loading,setLoading] = useState(true);
    const dog = useSelector(state => state.detail);

    useEffect(() => {
        dispatch(getDogID(id));
        setTimeout(()=>{
            setLoading(false);
        },1000);
    }, [dispatch])

    return(
        <div>
            <NavBar/>
            <div>
                {loading?<Loader/>:
                <div className={styles.cont}>
                    <div className={styles.imgdiv}>
                        <img className={styles.img} src={dog.image} alt="detail"/>
                    </div>
                    <div className={styles.info}>
                        <Link to={'/breeds'}>
                            <div className={styles.linkback}>
                                <img className={styles.arrow} src={arrowleft} alt='arrow'/>
                                <p className={styles.back}>Back to breeds</p>
                            </div>
                        </Link>
                        <p className={styles.breed}>BREED</p>
                        <h1 className={styles.title}>{dog.name}</h1>
                        <div className={styles.attrib}>
                            <div className={styles.internalcont}>
                                <p className={styles.attribtitle}>Height:</p>
                                <p>{dog.height} cm</p>
                            </div>
                            <div className={styles.internalcont}>
                                <p className={styles.attribtitle}>Weight:</p>
                                <p>{dog.weight} kg</p>
                            </div>
                            <div className={styles.internalcont}>
                                <p className={styles.attribtitle}>Life span:</p>
                                <p>{dog.life_span}</p>
                            </div>
                            <p className={styles.temperaments}>Temperaments:</p>
                            <ul className={styles.list}>
                            {
                                dog.temperament?.map(el=>{
                                    return <li key={el}>{el}</li>
                                })
                            }
                            </ul>
                        </div>
                    </div>
                </div>}
            </div>
            <SocialMedia/>
        </div>
    )
}

export default BreedDetail;