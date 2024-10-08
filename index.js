import express from "express";
import session from "express-session";
import { dbConnection } from "./database/DB.Connection.js";
import homeRouter from "./src/modules/home/home.routes.js";
import loginRouter from "./src/modules/login/login.routes.js";
import registerRouter from "./src/modules/register/register.routes.js";
import messageRouter from "./src/modules/messages/message.routes.js";
import userRouter from "./src/modules/user/user.routes.js";
import cors from "cors";
import "dotenv/config";
import path from "path";
const app = express();
const port = process.env.PORT || 3000;

import mongoSession from "connect-mongodb-session";
let MongoDBStore = mongoSession(session);
let store =new MongoDBStore({
  uri: process.env.DB_ONLINE_CONNECTION,
  databaseName: process.env.DB_NAME,
  collection: process.env.COLLECTION,
});
app.use(
  session({
    secret: process.env.SECRET_SESSION,
    uri: process.env.DB_ONLINE_CONNECTION,
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 4 // 4 days
    },
    
  })
);
app.use(cors());

app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/", homeRouter);
app.use("/", loginRouter);
app.use("/", registerRouter);
app.use("/", messageRouter);
app.use("/", userRouter);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
