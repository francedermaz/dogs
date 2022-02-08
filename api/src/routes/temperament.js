const { default: axios } = require('axios');
const {Router} = require('express');
const {API_KEY} = process.env;
const { Dog, Temperament } = require("../db.js")

const router = Router();

router.get('/',async(req,res)=>{
    const result = await Temperament.findAll();
    if(result.length){
        res.status(200).send(result);
    }
    else{
        let aux=[];
        let sct = await axios.get(`https://api.thedogapi.com/v1/breeds?=api_key=${API_KEY}`);
        let temps = sct.data.map(el=>el.temperament);
        let split = temps.map(el=>el&&el.split(','))
        let flat = split.flat();
        flat.map(el=>{
            if(el!=undefined){
                if(aux.length===0||!aux.includes(el.trim())){
                    let wspaces = el.trim();
                    aux.push(wspaces);
                }
            }
        })
        aux.sort();
        for (let i=0;i<aux.length;i++){
            Temperament.create({name: aux[i]})
        }
        const result = await Temperament.findAll();
        res.status(200).send(result);
    }
})

module.exports = router;
