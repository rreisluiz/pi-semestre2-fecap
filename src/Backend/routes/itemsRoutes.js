const express = require('express')
const router = express.Router()
const itemsController = require('../controllers/itemsController')

router.get('/', itemsController.getAllItems)
router.get('/id/:id', itemsController.getItemById)
router.get('/cpf/:cpf', itemsController.getItemsByUser)
router.post('/add', itemsController.addItem)
router.put('/update/:id', itemsController.updateItem)
router.delete('/delete/:id', itemsController.deleteItem)

module.exports = router