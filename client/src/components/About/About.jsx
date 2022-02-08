import NavBar from '../NavBar/NavBar';
import SocialMedia from '../SocialMedia/SocialMedia';
import styles from './About.module.css';

const About = () => {
    return(
        <div>
            <NavBar is={'about'}/>
            <div className={styles.content}>
                <h1 className={styles.title}>SPA developed by Cedermaz Francisco Agustin</h1>
            </div>

            <SocialMedia/>
        </div>
    )
}

export default About;