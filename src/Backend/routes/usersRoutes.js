const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')
// const upload = require('../config/multerConfig')
// router.post('/', upload.single('foto'), personagensController.createPersonagem)
// router.put('/:id', upload.single('foto'), personagensController.createPersonagem)
router.post('/add', usersController.createUser)
router.delete('/delete', usersController.deleteUser)

module.exports = router