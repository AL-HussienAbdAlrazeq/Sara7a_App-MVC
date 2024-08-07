import { Router } from "express";
import {  handleRegister, register } from "./register.controller.js";
import { validate } from "../../middleware/validation.js";
import { registerValidation } from "./register.validation.js";



const registerRouter = Router()
  

registerRouter.get('/register' ,register)
registerRouter.post('/handleRegister' , validate(registerValidation),handleRegister)



export default registerRouter 