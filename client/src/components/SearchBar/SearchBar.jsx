import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDogName } from '../../redux/actions';
import styles from './SearchBar.module.css';

const SearchBar = ({pagination}) => {
    const dispatch = useDispatch();
    const [name,setName] = useState('');

    function handleChange (e) {
        e.preventDefault();
        setName(e.target.value);
    }

    function handleSubmit (e) {
        e.preventDefault();
        dispatch(getDogName(name));
        pagination(1);
        setName('');
    }

    return(
        <div className={styles.searchbar}>
            <input className={styles.input} type='text' placeholder='Search Dog' onChange={e=>handleChange(e)}/>
            {
                name.trim()==='' || name.trim().length<3?<button className={styles.bttdis}disabled>Search</button>:<button type='submit' className={styles.btt} onClick={e=>handleSubmit(e)}>Search
                </button>
            }
        </div>
    )
}

export default SearchBar;