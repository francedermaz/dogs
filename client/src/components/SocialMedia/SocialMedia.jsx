import styles from './SocialMedia.module.css'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'

const SocialMedia = () => {
    return(
        <div className={styles.socialmedia}>
            <a className={styles.iconone} target="_blank" href="https://github.com/francedermaz/"><FaGithub/></a>
            <a className={styles.icon} target="_blank" href="https://www.linkedin.com/in/francedermaz/"><FaLinkedin/></a>
        </div>
    )
}

export default SocialMedia;