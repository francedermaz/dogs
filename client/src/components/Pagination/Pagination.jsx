import styles from './Pagination.module.css';

const Pagination = ({alldogs,dogsperPage,pagination,currentPage}) => {
    let pages = [];
    for(let i=0;i<Math.ceil(alldogs/dogsperPage);++i){
        pages.push(i+1);
    }
    return(
        <div className={styles.general}>
            <ul className={styles.pagination}>
                {
                    pages.length?pages.map(num=>{
                        return(
                            <li key={num}>
                                {
                                    num===currentPage?<button className={styles.buttonactive}>{currentPage}</button>:<button className={styles.button} onClick={()=>pagination(num)}>
                                    {num}
                                </button>
                                }
                            </li>
                        )
                    }):<></>
                }
            </ul>
        </div>
    )
}

export default Pagination;