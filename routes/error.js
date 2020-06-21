const { Router } = require('express')
const errorController = require('../controllers/error')

const router = Router()

router.get(errorController.get404)

module.exports = router