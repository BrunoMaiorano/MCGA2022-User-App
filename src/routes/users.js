const router = require('express').Router();
const productController = require('../controllers/users');

router.get('/', productController.getALLUsers)
router.get('/:id', productController.getUserByPk)
router.post('/create', productController.createUser)
router.delete('/delete/:id', productController.removeUser)
router.patch('/update/:id', productController.updateUser) //put(completo) o path(una parte)

module.exports = router;