import Joi from 'joi'


const registerValidation = Joi.object({
  name     : Joi.string().min(3).max(100).required(),
  email    : Joi.string().min(3).max(100).required(),
  password : Joi.string().pattern(/^[A-Z][A-Za-z0-9]{8,40}$/).required(),
  confirmPassword:Joi.valid(Joi.ref('password')).required(),
})


export{
    registerValidation
}