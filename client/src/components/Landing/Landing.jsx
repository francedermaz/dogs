import { Link } from "react-router-dom";
import styles from './Landing.module.css';
import mainimage from './images/mainimage.png';
import NavBar from "../NavBar/NavBar";
import SocialMedia from "../SocialMedia/SocialMedia";

const Landing = () =>{
    return(
        <div>
            <div className={styles.nav}>
                <NavBar is={'landing'}/>
            </div>
            <div className={styles.page}>
                <div className={styles.imgdiv}>
                    <img className={styles.img} src={mainimage} alt='mainimage'/>
                </div>
                <div className={styles.textland}>
                    <h1 className={styles.titleone}>Four legs are</h1>
                    <h1 className={styles.title}>better than two</h1>
                    <p className={styles.textone}>An animal's eyes have the power</p>
                    <p className={styles.text}>to speak a great language</p>
                    <Link to={'/explore'}>
                        <button className={styles.button}>Get Started</button>
                    </Link>
                </div>
            </div>
            <SocialMedia/>
        </div>
    )
}

export default Landing;