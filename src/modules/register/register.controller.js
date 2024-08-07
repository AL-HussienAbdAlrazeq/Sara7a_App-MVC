import { User } from "../../../database/models/user.model.js";
import { catchError } from "../../middleware/catchError.js";



const register = catchError(async(req,res,next)=>{
  res.render('register.ejs',{error:req.query.error , session: null})
})

const handleRegister = catchError(async(req,res,next)=>{
  let isUserExist = await User.findOne({email:req.body.email})
  if(isUserExist) { 
     res.redirect('/register?error=Email already exists')
    }

  await User.insertMany(req.body)
  res.redirect('/login')
})

export {
  handleRegister, register
};
