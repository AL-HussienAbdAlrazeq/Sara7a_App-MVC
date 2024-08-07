import { Router } from "express";
import { handleLogin, login } from "./login.controller.js";
import { validate } from "../../middleware/validation.js";
import { loginValidation } from "./login.validation.js";

const loginRouter = Router();

loginRouter.get("/login", login);
loginRouter.post("/handleLogin", validate(loginValidation), handleLogin);

export default loginRouter;
