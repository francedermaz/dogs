import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTemperaments, postDog } from '../../redux/actions';
import NavBar from '../NavBar/NavBar';
import SocialMedia from '../SocialMedia/SocialMedia';
import imagedog from './images/imagedog.gif';
import styles from './CreateDog.module.css';

const CreateDog = () => {
    const dispatch = useDispatch();
    const temperaments = useSelector(state=>state.temperaments);

    const [input,setInput] = useState({
        name: '',
        image: "",
        minheight: '',
        maxheight: '',
        minweight: '',
        maxweight: '',
        minlife_span: '',
        maxlife_span: '',
        temperament: [],
    })
    const [isSent,setIsSent] = useState(false);
    const [errorImg,setErrorImg] = useState(false);

    function validate(str){
        let pattern =  new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
    }

    function handleChange(e){
        e.preventDefault();
        setIsSent(false);
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
        if(e.target.name==='image'){
            if(e.target.value!==''){
                if(validate(e.target.value)===true){
                    setErrorImg(false);
                }
                else{
                    setErrorImg(true);
                }
            }
            else setErrorImg(false);
        }
    }
    function handleSelect(e){
        if(!input.temperament.includes(e.target.value) && input.temperament.length<6){
            setInput({
                ...input,
                temperament: [...input.temperament,e.target.value],
            })
        }
	}
    function handleDelete(e,t){
        e.preventDefault();
        setInput({
            ...input,
            temperament: input.temperament.filter(e=>e!==t),
        })
    }
    function handleSubmit(e){
        e.preventDefault();
        if(input.image.trim()===""){
            dispatch(postDog({
                name:input.name[0].toUpperCase()+input.name.slice(1),
                image:"http://www.citydogshare.org/assets/default_dog-f1f5e5aa031ad0a956a936dc4fb4bde95c712f2ad1f99e883b5bc58d22aec668.jpg",
                height:input.minheight+' - '+input.maxheight,
                weight:input.minweight+' - '+input.maxweight,
                life_span:input.minlife_span+' - '+input.maxlife_span+' years',
                temperament:input.temperament,
            }));
        }
        else{
            dispatch(postDog({
                name:input.name[0].toUpperCase()+input.name.slice(1),
                image:input.image,
                height:input.minheight+' - '+input.maxheight,
                weight:input.minweight+' - '+input.maxweight,
                life_span:input.minlife_span+' - '+input.maxlife_span+' years',
                temperament:input.temperament,
            }));
        }
        setIsSent(true);
        setInput({
            name: '',
            image: "",
            minheight: '',
            maxheight: '',
            minweight: '',
            maxweight: '',
            minlife_span: '',
            maxlife_span: '',
            temperament: [],
		});
    }

    useEffect(() => {
        dispatch(getTemperaments());
    }, [dispatch])

    return(
        <div>
            <NavBar is={'create'}/>
            <div className={styles.general}>
            <div className={styles.content}>
            <h1 className={styles.title}>Create your breed</h1>
            <form onSubmit={e=>handleSubmit(e)}>
                <input className={styles.input}
                value={input.name} type='text' name='name' placeholder="Name" onChange={e=>handleChange(e)}>
                </input>
                <input className={styles.input}
                value={input.image} type='text' name='image' placeholder="Url of image" onChange={e=>handleChange(e)}>
                </input>
                <input className={styles.input}
                value={input.minheight} type='number' name='minheight' placeholder="Min Height" onChange={e=>handleChange(e)}>
                </input>
                <input className={styles.input}
                value={input.maxheight} type='number' name='maxheight' placeholder="Max Height" min='1' max='9999' onChange={e=>handleChange(e)} required>
                </input>
                <input className={styles.input}
                value={input.minweight} type='number' name='minweight' placeholder="Min Weight" min='1' max='9999' onChange={e=>handleChange(e)} required>
                </input>
                <input className={styles.input}
                value={input.maxweight} type='number' name='maxweight' placeholder="Max Weight" min='1' max='9999' onChange={e=>handleChange(e)} required>
                </input>
                <input className={styles.input}
                value={input.minlife_span} type='number' name='minlife_span' placeholder="Min Life Span" min='1' max='30' onChange={e=>handleChange(e)} required>
                </input>
                <input className={styles.input}
                value={input.maxlife_span} type='number' name='maxlife_span' placeholder="Max Life Span" min='1' max='30' onChange={e=>handleChange(e)} required>
                </input>
                <p className={styles.temperamentstitle}>Temperaments:</p>
                <div className={styles.temperament}>
                    <select className={styles.select} onChange={e=>handleSelect(e)}>
                        <optgroup label="Select Temperaments">
                        </optgroup>
                        {
                            temperaments.map(tp=>{
                                return <option key={tp.id} value={tp.name}>{tp.name}</option>
                            })
                        }
                    </select>
                </div>
                <div className={styles.allopt}>
                {input.temperament?.map(t=>(
                    <div className={styles.opt}>
                        <div>
                            <p className={styles.titleopt}>{t}</p>
                        </div>
                        <div>
                            <button className={styles.bttx} onClick={e=>handleDelete(e,t)}>x</button>
                        </div>
                    </div>
                ))}
                </div>
                <div className={styles.btn}>
                    {
                        input.name.trim()==='' || input.name.trim().length<4 || 
                        input.minheight.length>5 || input.minheight<1 || input.minheight.trim()==='' || input.minheight%1!==0 ||
                        input.temperament.length>5 || input.temperament.length===0 || 
                        parseInt(input.minheight)>=parseInt(input.maxheight) || 
                        parseInt(input.minweight)>=parseInt(input.maxweight) || 
                        parseInt(input.minlife_span)>=parseInt(input.maxlife_span) ||
                        errorImg===true?
                        <button disabled className={styles.bttncreatedis}>Create</button>:<button className={styles.bttncreate} type="submit">Create</button>
                    }
                </div>
                <div>
                    {
                        isSent===true?<p className={styles.sent}>Your breed has been created!</p>:<></>
                    }
                    {
                        input.temperament.length>5?<p className={styles.error}>Error! You can only add up to 5 temperament</p>:<></>
                    }
                    {
                        errorImg===true && input.image.trim()!==''?<p className={styles.error}>Please enter a valid url</p>:<></>
                    }
                    {
                        (parseInt(input.minheight)>=parseInt(input.maxheight) && input.maxheight.trim()!=='') ||
                        (parseInt(input.minweight)>=parseInt(input.maxweight) && input.maxweight.trim()!=='') ||
                        (parseInt(input.minlife_span)>=parseInt(input.maxlife_span) && input.maxlife_span.trim()!=='') 
                        ?<p className={styles.error}>Error! Check your min and max values</p>:<></>
                    }
                </div>
            </form>
            </div>
            <div>
                <img className={styles.img} src={imagedog} alt='mainimage'/>
            </div>
            </div>
            <SocialMedia/>
        </div>
    )
}

export default CreateDog;