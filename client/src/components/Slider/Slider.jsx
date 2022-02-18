import { useState } from 'react';
import { Link } from 'react-router-dom';
import Afghan_Hound from './images/Afghan_Hound.png'
import African_Hunting_Dog from './images/African_Hunting_Dog.png'
import Airedale_Terrier from './images/Airedale_Terrier.png'
import Akbash_Dog from './images/Akbash_Dog.png'
import Akita from './images/Akita.png'
import styles from './Slider.module.css'
import left from './images/left.png'
import right from './images/next.png'

const Slider = ({alldogs}) => {
    const [current,setCurrent] = useState(0);
    const length = alldogs.length;
    const imagesData = [
        {image:Afghan_Hound},{image:African_Hunting_Dog},{image:Airedale_Terrier},{image:Akbash_Dog},{image:Akita}
    ]
    
    const nextSlide = () => {
        setCurrent(current===length-1?0:current+1);
    }
    const prevSlide = () => {
        setCurrent(current===0?length-1:current-1);
    }

    return (
        <div className={styles.slider}>
            <img src={left} alt='left' className={styles.leftarrow} onClick={prevSlide}/>
            <img src={right} alt='right' className={styles.rightarrow} onClick={nextSlide}/>
            {
                alldogs.map((el,index)=>{
                    return(
                        <div className={index===current?styles.slideact:styles.slide} key={index}>
                            {index===current?<div className={styles.cont}>
                                <div className={styles.text}>
                                    <h1 className={styles.temperament}>{el.temperament[0]}</h1>
                                    <h1 className={styles.title}>{el.name}</h1>
                                    <div className={styles.smalltext}>
                                        <div>
                                            <p className={styles.index}>0{index+1}/0{alldogs.length}</p>
                                        </div>
                                        <div>
                                            <p className={styles.texttop}>Some dogs can weigh {el.weight}</p>
                                            <p className={styles.textbottom}>kg and measure {el.height} cm.</p>
                                        </div>
                                    </div>
                                    <Link to={'/breeds'}>
                                        <button className={styles.button}>See More</button>
                                    </Link>
                                </div>
                                <div>
                                <img className={styles.img} src={imagesData[index].image} alt="slide image"/>
                                </div>
                                </div>:<></>}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Slider;
