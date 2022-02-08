const {Router} = require('express');
const { getAllDogs } = require('../controllers');

const router = Router();

router.get('/:filter',async(req,res)=>{
    const {filter} = req.params;
    let all = await getAllDogs();
    let filtered = all;
    if(filter==='api'){
        filtered = all.filter(e=>typeof e.id==='number');
    }
    else if(filter==='db'){
        filtered = all.filter(e=>typeof e.id!='number');
    }
    res.status(200).send(filtered);
})

module.exports = router;
