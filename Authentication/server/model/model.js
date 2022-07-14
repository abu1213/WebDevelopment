const mongoose = require("mongoose")

var schema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    emailid:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now

    }
        
    })
    const UserDB = mongoose.model("Userdb",schema)
    module.exports = UserDB
