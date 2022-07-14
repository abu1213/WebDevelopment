const joi = require("@hapi/joi")

const registerValidation = data =>{
const schema = joi.object({
    username:joi.string().min(6).required(),
    emailid:joi.string().min(6).required(),
    password:joi.string().min(6).required()
})
return schema.validate(data)
}
const loginValidation = data =>{
    const schema = joi.object({
        emailid:joi.string().min(6).required(),
        password:joi.string().min(6).required()
    })
    return schema.validate(req.body)
    }

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;