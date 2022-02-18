import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDogs, getTemperaments } from '../../redux/actions';
import Loader from '../Loader/Loader';
import NavBar from '../NavBar/NavBar';
import Slider from '../Slider/Slider';
import SocialMedia from '../SocialMedia/SocialMedia';

const Explore = () => {
    const dispatch = useDispatch();
    let alldogs = useSelector(state => state.alldogs);
    alldogs=alldogs.slice(1,6);

    useEffect(() => {
        dispatch(getAllDogs());
        dispatch(getTemperaments());
    }, [dispatch])

    return(
        <div>
            <NavBar is={'explore'}/>
            {alldogs.length?<Slider alldogs={alldogs}/>:<Loader/>}
            <SocialMedia/>
        </div>
    )
}

export default Explore;