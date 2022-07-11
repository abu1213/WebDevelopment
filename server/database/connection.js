const mongoose = require("mongoose")

const connectDB = async() =>{
    try{
      const con = await mongoose.connect(process.env.URI,{
        useNewUrlParser:true,
       
       useUnifiedTopology: true
      })
      console.log("connected")
    }
catch(err){

}
}
module.exports = connectDB