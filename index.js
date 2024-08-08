import express from "express";
import session from "express-session";
import { dbConnection } from "./database/DB.Connection.js";
import homeRouter from "./src/modules/home/home.routes.js";
import loginRouter from "./src/modules/login/login.routes.js";
import registerRouter from "./src/modules/register/register.routes.js";
import messageRouter from "./src/modules/messages/message.routes.js";
import userRouter from "./src/modules/user/user.routes.js";
import cors from 'cors'
import 'dotenv/config'
const app = express();
const port = process.env.PORT||3000;

import mongoSession from "connect-mongodb-session";
let MongoDBStore = mongoSession(session);
let store = MongoDBStore({
  uri: "mongodb://localhost:27017/Sara7a_MVC",
  collection: "mySessions",
});
app.use(
  session({
    secret: "Sara7aMVCApp",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);
app.use(cors())

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use("/", homeRouter);
app.use("/", loginRouter);
app.use("/", registerRouter);
app.use("/", messageRouter);
app.use("/", userRouter);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
