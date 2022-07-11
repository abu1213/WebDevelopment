const UserDb = require("../model/model")

exports.create= (req,res)=>{
    if(!req.body){
        res.status(400).send({
            message:"some error occured"
        })
        return;
    }

    const user = new UserDb({
        username:req.body.username,
        emailid:req.body.emailid,
        gender:req.body.gender,
        status:req.body.status
    })
    
        user.save(user).then(data=>{
            res.send(data)
        })
}
exports.find= (req,res)=>{
    if(req.query.id){
        const id = req.query.id
        UserDb.findById(id).then(user=>{
            res.send(user)
        })
    }else{
    UserDb.find().then(user=>{
        res.send(user)
    })
}}
exports.update= (req,res)=>{
    const id = req.params.id;
    UserDb.findByIdAndUpdate(id, {
        username:req.body.username,
        emailid:req.body.emailid,
        gender:req.body.gender,
        status:req.body.status}).then(data=>{
        if(!data){
            res.send({message:"No user"})
        }
        res.send(data)
        
    })
}
exports.delete= (req,res)=>{
    const id = req.params.id;
    UserDb.findByIdAndDelete(id).then(data=>{
        if(!data){
            res.send({message:"No user"})
        }else{
        res.send({message:"Message Deleted Successfully"})
        }})
}