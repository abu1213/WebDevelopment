const express = require("express")
const app = express()
require("dotenv").config()
const authRoute = require("./server/router/auth")

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended:true}))

port = process.env.PORT || 8000

const mongoose = require('mongoose');
mongoose.connect(process.env.URI,{useNewUrlParser:true},()=>{
    console.log("Connected")
})

app.use("/api/user",authRoute)
app.listen(3000,()=>{
    console.log("Vanakkam da maapla")
})