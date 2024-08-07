import Joi from 'joi'


const loginValidation = Joi.object({
  email    : Joi.string().min(3).max(100).required(),
  password : Joi.string().pattern(/^[A-Z][A-Za-z0-9]{8,40}$/).required()
})


export{
    loginValidation
}