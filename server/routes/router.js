const express = require("express")
const { homeRouter , addUser,updateUser} = require("../services/render")
const router = express.Router()


router.get('/',homeRouter)
router.get('/add-user',addUser)
router.get('/update-user',updateUser)

module.exports = router