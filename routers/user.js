const express = require('express')

const { loginUser } = require('../controllers/auth/logincontroller')
const router = express.Router()

router.post('/loginUser', loginUser)



module.exports = router