const express = require('express')
const router = express.Router()
const interestsController = require('../controllers/interestsController')
const { extractToken, authMiddleware } = require('../authMiddleware');

router.post('/add', extractToken, authMiddleware, interestsController.createInterest);
router.get('/:cpf', interestsController.getInterestedItems);

module.exports = router