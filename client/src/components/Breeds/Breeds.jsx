import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterDBorAPI, filterTemperaments, getAllDogs, getTemperaments, orderBy } from "../../redux/actions";
import Cards from "../Cards/Cards";
import Filter from "../Filter/Filter";
import NavBar from "../NavBar/NavBar";
import NotFound from "../NotFound/NotFound";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";
import SocialMedia from "../SocialMedia/SocialMedia";
import styles from './Breeds.module.css';

const Breeds = () => {
    const dispatch = useDispatch();
    const alldogs = useSelector(state => state.dogs);
    const temperaments = useSelector(state => state.temperaments);

    const [currentPage,setcurrentPage] = useState(1);
    const pagination = pageNumber => setcurrentPage(pageNumber);

    let dogsperPage=8;
    let indexofLastDog=currentPage*dogsperPage;
    let indexofFirstDog=indexofLastDog-dogsperPage;
    
    let currentdogs = null;
    if(alldogs!='Not found') currentdogs = alldogs.slice(indexofFirstDog,indexofLastDog);
    else currentdogs=alldogs;

    const handleOrderBy = e => {
        dispatch(orderBy(e.target.value));
        setcurrentPage(1);
    }
    const handleFilterTemperaments = e => {
        dispatch(filterTemperaments(e.target.value));
        setcurrentPage(1);
    }
    const handleFilterDBorAPI = e => {
        dispatch(filterDBorAPI(e.target.value));
        setcurrentPage(1);
    }

    useEffect(() => {
        dispatch(getAllDogs())
        dispatch(getTemperaments());
    }, [dispatch])

    return(
        <div>
            <NavBar is={'breeds'}/>
            <div className={styles.page}>
                <div className={styles.sep}>
                    <SearchBar/>
                    <div className={styles.filter}>
                        <Filter
                            allTemperaments={temperaments}
                            handleOrderBy={handleOrderBy}
                            handleFilterTemperaments={handleFilterTemperaments}
                            handleFilterDBorAPI={handleFilterDBorAPI}
                        />
                    </div>
                </div>
                <div className={styles.cards}>
                    {
                        currentdogs === "Not found"?<NotFound/>:<Cards alldogs={currentdogs}/>
                    }
                </div>
            </div>
            <Pagination
                alldogs={alldogs.length}
                dogsperPage={dogsperPage}
                pagination={pagination}
                currentPage={currentPage}
            />
            <div className={styles.social}>
                <SocialMedia/>
            </div>
        </div>
    )
}

export default Breeds;