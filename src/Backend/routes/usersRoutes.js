const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')
const { extractToken, authMiddleware } = require('../authMiddleware');

router.get('/data', extractToken, authMiddleware, usersController.getNomeUsuario);
router.get('/pagina-usuario', authMiddleware, (req, res) => {
    // Lógica para lidar com a requisição GET para /pagina-usuario
    res.send('Página do usuário'); 

});
router.post('/add', usersController.createUser)
router.post('/login', usersController.loginUser);

router.delete('/delete', usersController.deleteUser)

module.exports = router