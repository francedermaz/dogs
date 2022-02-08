const { Router } = require('express');

const dogsRoute = require ('./dogs');
const temperamentRoute = require ('./temperament');
const filterRoute = require ('./filter');

const router = Router();

router.use('/dogs',dogsRoute)
router.use('/temperament',temperamentRoute)
router.use('/filter',filterRoute)

module.exports = router;
