import { catchError } from "../../middleware/catchError.js";
import { AppError } from "../../utils/AppError.js";

const home = catchError(async(req,res,next)=>{
  res.render('home.ejs' , {session: req.session})
})

export{
  home
}