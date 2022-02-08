import React from 'react';
import styles from './Loader.module.css';
import loadinggif from './images/loading.gif'

const Loader = () => {
    return (
        <div className={styles.loader}>
            <img src={loadinggif} className={styles.loading }alt="loading"/>
        </div>
    )
}

export default Loader;