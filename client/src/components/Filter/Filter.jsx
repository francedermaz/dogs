import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllDogs } from '../../redux/actions';
import styles from './Filter.module.css';

const Filter = ({allTemperaments,handleOrderBy,handleFilterTemperaments,handleFilterDBorAPI}) => {
    const dispatch = useDispatch();

    function handleSubmit(e){
        if(e.target.value==='all' || e.target.value==='api' || e.target.value==='db'){
            handleFilterDBorAPI(e);
        }
        else{
            handleFilterTemperaments(e);
        }
    }

    function getAll(){
        dispatch(getAllDogs());
    }

    useEffect(()=>{
        dispatch(getAllDogs())
    },[dispatch])

    return (
        <section className={styles.containerfilter}>
            <div>
            <label htmlFor='order' className={styles.title}>Sort by: </label>
            <select className={styles.select} id='order' onChange={e=>handleOrderBy(e)}>
                <option value='unordered'>Unordered</option>
                <optgroup label="--- Alphabetical ---">
                    <option value='alph-asc'>A-Z</option>
                    <option value='alph-des'>Z-A</option>
                </optgroup>
                <optgroup label="--- Weight ---">
                    <option value='wei-asc'>Ascendant</option>
                    <option value='wei-des'>Descendant</option>
                </optgroup>
            </select>
            </div>
            
            <div>
            <label htmlFor='filter'  className={styles.title}>Filter by: </label>
            <select className={styles.select} id='filtert' onChange={e=>handleSubmit(e)}>
                <optgroup label="--- Origin ---">
                    <option value='all'>All</option>
                    <option value='api'>Exist</option>
                    <option value='db'>Created</option>
                </optgroup>
                <optgroup label="--- Temperament ---">
                    <option value='all'>All</option>
                    {allTemperaments?.map(tp=>{return <option value={tp.name} key={tp.id}>{tp.name}</option>})}
                </optgroup>
            </select>
            </div>
            <div>
                <button className={styles.button} onClick={()=>getAll()}>Show All</button>
            </div>
        </section>
    )
}

export default Filter;