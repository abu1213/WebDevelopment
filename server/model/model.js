const mongoose = require("mongoose")

var schema = new mongoose.Schema({
    username:{
        type:String,
        
    },
    emailid:{
        type:String,
       
    },
    gender:String,
    
    status:String
        
    })
    const UserDB = mongoose.model("Userdb",schema)
    module.exports = UserDB
