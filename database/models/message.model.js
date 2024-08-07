import { Schema,model } from "mongoose"


const msgSchema = new Schema({
   message:String,
   user:String
})



export const Message = model('Message' , msgSchema)
