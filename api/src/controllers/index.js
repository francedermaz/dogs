const {Dog, Temperament} = require('../db');
const { getAllDB, filterbyname, getAllAPI, getByIDAPI, getByIdDB } = require('../helpers');

async function getAllDogs(name){
    let db=await getAllDB();
    let api=await getAllAPI();
    let all=api.concat(db);
    if(name){
        let filtered=await filterbyname(all,name);
        if(filtered){ return filtered}
        else return "Not found";
    }
    else{
        return all;
    }
}

async function getDogDetail(id){
    let doggie = null;
    if(id.length<10) doggie=await getByIDAPI(id);
    else doggie=await getByIdDB(id);
    return doggie;
}


async function createDog(name,image,height,weight,life_span,temperament){
    let newDog = await Dog.create({
        name,
        image,
        height,
        weight,
        life_span,
    });
    let temperamentfound = await Temperament.findAll({
        where: {name: temperament},
    });
    newDog.addTemperament(temperamentfound);
    return newDog;
}

module.exports = {
    getAllDogs, getDogDetail, createDog
}