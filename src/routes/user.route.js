const {Router} = require('express')
const userController = require("../controllers/user.controller") 

const router = Router()

router.post('/add',userController.addUser)

module.exports = router