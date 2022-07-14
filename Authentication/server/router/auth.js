const express = require("express")
const router = express.Router();
const UserDb = require("../model/model");
const { registerValidation } = require("../validation/validation");

router.post('/register',async (req,res)=>{

    const {error} = registerValidation(req.body)
    if(error){
        return res.status(400).send("Error")
    }
    const emailExist = await UserDb.findOne({emailid:req.body.emailid}) 
    if (emailExist){
        return res.status(400).send("Email already Exists")
    }
    const user = new UserDb({
        username:req.body.username,
        emailid:req.body.emailid,
        password:req.body.password,
        date:req.body.date
    })
    try{
        const savedUser = await user.save();
        res.send(savedUser)
    }
    catch(err){
        res.status(400).send(err)
    }
})

module.exports = router