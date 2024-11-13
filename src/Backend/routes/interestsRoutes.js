const express = require('express')
const router = express.Router()
const interestsController = require('../controllers/interestsController')

router.post('/add', interestsController.createInterest);

module.exports = router