const express = require('express')
const authController = require('../controllers/auth.controller')
const router = express.Router()

router.route('/').get(authController.home)

module.exports = router