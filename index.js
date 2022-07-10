const express = require("express")
const app = express();
const Router = require("./server/routes/router")
require("dotenv").config()
const bodyparser = require("body-parser");
const connectDB = require("./server/database/connection");
app.use(bodyparser.urlencoded({extended:true}))
port = process.env.PORT || 8000

connectDB()
app.set("view engine","ejs")

// app.get('/',(req,res)=>{
//     res.render("index")
// })
// app.get('/add-user',(req,res)=>{
//     res.render("add_user")
// })
// app.get('/update-user',(req,res)=>{
//     res.render("update_user")
// })

app.use("/",Router)
app.listen(port,()=>{
    console.log(`Connected on port: ${port}`)
})