const { Router } = require('express')
const mainController = require('../controllers/main')

const router = Router()

router.get('/add-product', mainController.getAddProduct)

router.post('/add-product', mainController.postAddProduct)

router.get('/edit-product/', mainController.getEditProduct)

router.post('/edit-product', mainController.postEditProduct)

router.post('/del-product', mainController.postDelProduct)

router.get('/admin-product', mainController.getAdminProduct)

router.get('/', mainController.getHome)

module.exports = router