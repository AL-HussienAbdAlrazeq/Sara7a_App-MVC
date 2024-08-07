
import bcrypt from "bcrypt"
import { User } from "../../database/models/user.model.js"


const checkEmail =async (req,res,next)=>{
    const isFound = await User.findOne({email:req.body.email})
    if(isFound) return res.redirect('/register?error=Email already exists')

    req.body.password = bcrypt.hashSync(req.body.password , 8)
    req.body.confirmPassword = bcrypt.hashSync(req.body.rePassword , 8)
    next()
}

export{
    checkEmail
}