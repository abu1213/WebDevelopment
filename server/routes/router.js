const express = require("express")
const { homeRouter , addUser,updateUser} = require("../services/render")
const router = express.Router()
const controller = require("../controller/controller")

router.get('/',homeRouter)
router.get('/add-user',addUser)
router.get('/update-user',updateUser)

router.post("/api/users",controller.create)
router.get("/api/users",controller.find)
router.put("/api/users/:id",controller.update)
router.delete("/api/users/:id",controller.delete)
module.exports = router