const axios = require('axios');
const {Dog,Temperament} = require('./db');
const {API_KEY} = process.env;

// F R O M  A P I
let getAllAPI = async() => {
    let req = await axios.get(`https://api.thedogapi.com/v1/breeds?=api_key=${API_KEY}`);
    let dogs = req.data.map(el=>{
        return({
            id:el.id,
            name:el.name,
            image:el.image.url,
            height:el.height.metric,
            weight:el.weight.metric,
            life_span:el.life_span,
            temperament:el.temperament?el.temperament.split(', '):el.temperament,
        })
    });
    return dogs;
}

let getByIDAPI = async(id) => {   //The api doesn't have a specific endpoint to request for a particular breed using the ID
  let all=await getAllAPI();
  let result = all.filter(aux=>aux.id===parseInt(id));
  let aux = result[0];
  return aux;
}

let getByNameAPI = async(name) => {
    try{
        let rs = await axios.get('https://api.thedogapi.com/v1/breeds/search?q='+name);
        return(doggie=[{
            id:rs.data.id,
            name:rs.data.name,
            image:rs.data.image.url,
            height:rs.data.height,
            weight:rs.data.weight,
            life_span:rs.data.life_span,
            temperament:rs.data.temperament,
        }])
    }
    catch(e){
        return e;
    }
}

// F R O M  D A T A B A S E
let getAllDB = async() => {
    let doggie = await Dog.findAll({
        attributes: ['name', 'id', 'image', 'height','weight','life_span'],
        include: {
            model: Temperament,
        },
    })
    doggie = doggie.map(el=>{
        return({
            id:el.id,
            name:el.name,
            image:el.image,
            height:el.height,
            weight:el.weight,
            life_span:el.life_span,
            temperament:el.temperaments.map(e=>e.name),
        })
    })
    return doggie;
}


let getByIdDB = async(id) => {
    try{
        let el = await Dog.findOne({
            where:{id:id},
            attributes: ['name', 'id', 'image', 'height','weight','life_span'],
            include: {
                model: Temperament,
            },
        })
        return({
            id:el.id,
            name:el.name,
            image:el.image,
            height:el.height,
            weight:el.weight,
            life_span:el.life_span,
            temperament:el.temperaments.map(e=>e.name),
        })
    }
    catch(e){
        return e;
    }
}

// F I L T E R
let filterbyname = async(all,name) => {
    let pk = all.filter((aux=>{
        return aux.name.toLowerCase() === name.toLowerCase();
    }))
    // if(!pk.length){
    //     return await getByNameAPI(name);
    // }
    if(!pk.length) pk="Not found";
    return pk;
}

module.exports = {
    getAllAPI, getByIDAPI, getByNameAPI, getAllDB, getByIdDB, filterbyname
}