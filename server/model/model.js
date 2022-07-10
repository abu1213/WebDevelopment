const mongoose = require("mongoose")

var schema = new mongoose.schema({
    username:{
        type:String,
        required:true
    },
    emailid:{
        type:String,
        required:true
    },
    gender:String,
    
    status:String
        
    })
    const UserDB = mongoose.model("Users",schema)
    module.exports = UserDB