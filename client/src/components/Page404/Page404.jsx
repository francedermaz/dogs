import NavBar from '../NavBar/NavBar';
import SocialMedia from '../SocialMedia/SocialMedia';
import styles from './Page404.module.css';

const Page404 = () => {
    return(
        <div>
            <NavBar/>
            <div className={styles.content}>
                <h1 className={styles.title}>404</h1>
                <h2 className={styles.subtitle}>Why am I here?</h2>
                <p className={styles.textone}>It seem like the page that you are</p>
                <p className={styles.texttwo}>looking for is no longer here</p>
            </div>
            <SocialMedia/>
        </div>
    )
}

export default Page404;