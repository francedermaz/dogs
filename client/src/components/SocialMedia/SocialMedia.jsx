import styles from './SocialMedia.module.css'
import github from './images/github.png'
import linkedin from './images/linkedin.png'

const SocialMedia = () => {
    return(
        <div className={styles.socialmedia}>
            <a className={styles.iconone} target="_blank" href="https://github.com/francedermaz/"><img className={styles.icononeimg} src={github} alt='github img'></img></a>
            <a className={styles.icon} target="_blank" href="https://www.linkedin.com/in/francedermaz/"><img className={styles.iconimg} src={linkedin} alt='linkedin img'></img></a>
        </div>
    )
}

export default SocialMedia;