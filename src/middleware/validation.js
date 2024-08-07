import { AppError } from "../utils/AppError.js"


export const validate = (schema)=>{
    return(req,res,next)=>{
        const {error} = schema.validate({...req.body,...req.params,...req.query},{abortEarly:false})
        if(error) {
            let errMsg = error.details.map(err=>err.message)
            return next(new AppError(errMsg , 401))
        }else{
            next()
        }
    }
}