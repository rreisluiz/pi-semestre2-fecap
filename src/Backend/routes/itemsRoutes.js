const express = require('express')
const router = express.Router()
const upload = require('../config/multerConfig');
const itemsController = require('../controllers/itemsController')
const { extractToken, authMiddleware } = require('../authMiddleware');

router.get('/', itemsController.getAllItems)
router.get('/id/:id', itemsController.getItemById)
router.get('/cpf/:cpf', itemsController.getItemsByUser)

router.post('/add', extractToken, authMiddleware, upload.array('images', 5), itemsController.addItem); 

router.put('/update/:id', itemsController.updateItem)

router.delete('/delete/:id', itemsController.deleteItem)

module.exports = router