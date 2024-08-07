
import { Message } from "../../../database/models/message.model.js";
import { catchError } from "../../middleware/catchError.js";


const user = catchError(async(req,res,next)=>{
  res.render('user.ejs' , {userId:req.params.id , session: null})
})


const sendMsg = catchError(async(req,res,next)=>{
  req.body.user = req.params.id
   await Message.insertMany(req.body)
    res.redirect('/user/'+req.params.id)
})

const logout = catchError(async(req,res,next)=>{
   req.session.destroy(()=>{
      res.redirect('/login')
   })
})


export{
  user,
  sendMsg,
  logout
}