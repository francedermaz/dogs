const {Router} = require('express');
const { getAllDogs, getDogDetail, createDog } = require('../controllers');
const router = Router();

router.get('/',async(req,res)=>{
   const {name} = req.query;
   let all=null;
   if(name){
       all=await getAllDogs(name);
   }
   else all=await getAllDogs();
   if(all) res.status(200).send(all);
   else res.status(404).send("Not found");
})

router.get('/:id',async(req,res)=>{
    const {id} = req.params;
    let doggie = await getDogDetail(id);
    if(doggie) res.status(200).send(doggie);
    else res.status(404).send("Doggie not found");
})

router.post('/',async(req,res)=>{
    let {name,image,height,weight,life_span,temperament} = req.body;
    let aux = await createDog(name,image,height,weight,life_span,temperament);
    aux
        ? res.status(200).send({success:'Dog created'})
        : res.status(400).send({error:'404'})
})

module.exports = router;
