import { connect } from "mongoose";



export const dbConnection = connect(`mongodb://localhost:27017/Sara7a_MVC`).
then(()=>{
    console.log("DataBase Connected")
})

