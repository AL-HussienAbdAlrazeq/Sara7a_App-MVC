import { connect } from "mongoose";



export const dbConnection = connect(`mongodb+srv://Sara7a_App_MVC:iW3Lb6EbQ175Hp5y@cluster0.pvn4zwe.mongodb.net/Sara7a_MVC`).
then(()=>{
    console.log("DataBase Connected")
})

