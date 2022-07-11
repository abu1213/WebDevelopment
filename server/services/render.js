const axios = require("axios")

exports.homeRouter= (req,res)=>{
    axios.get("http://localhost:3000/api/users").then(response=>{
        console.log(response.data)
    res.render("index",{users:response.data})
})
}
exports.addUser= (req,res)=>{
    res.render("add_user")
}
exports.updateUser= (req,res)=>{
    axios.get("http://localhost:3000/api/users",{params:{id:req.query.id}}).then(response=>{
    res.render("update_user",{users:response.data})
    })}


