import { Link } from 'react-router-dom';
import styles from './NavBar.module.css'

const NavBar=({is})=>{
    return(
        <div>
            <section className={styles.navbar}>
                <Link to={'/'}>
                    {
                        is==='landing'?<h1 className={styles.logo}>Doggie</h1>:<h1 className={styles.logonormal}>Doggie</h1>
                    }
                </Link>
                <div className={styles.menu}>
                    <Link to={'/explore'}>
                        {
                            is==='explore'?<h1 className={styles.titleglow}>Explore</h1>:<h1 className={styles.title}>Explore</h1>
                        }
                    </Link>
                    <Link to={'/breeds'}>
                        {
                            is==='breeds'?<h1 className={styles.titleglow}>Breeds</h1>:<h1 className={styles.title}>Breeds</h1>
                        }
                    </Link>
                    <Link to={'/breeds/create'}>
                        {
                            is==='create'?<h1 className={styles.titleglow}>Create</h1>:<h1 className={styles.title}>Create</h1>
                        }
                    </Link>
                    <Link to={'/about'}>
                        {
                            is==='about'?<h1 className={styles.titleglow}>About</h1>:<h1 className={styles.title}>About</h1>
                        }
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default NavBar;