import { User } from "../../../database/models/user.model.js";
import { catchError } from "../../middleware/catchError.js";

const login = catchError(async (req, res, next) => {
  res.render("login.ejs", { error: req.query.error, session: null });
});

const handleLogin = catchError(async (req, res, next) => {
  let user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (!user) {
    return res.redirect("/login?error=Incorrect Email or Password");
  }
  let hour = 3600000;
  req.session.cookie.expires = new Date(Date.now() + hour);
  req.session.cookie.maxAge = hour;
  req.session.isLoggedIn = true;
  (req.session.userId = user._id), (req.session.name = user.name);
  res.redirect("/messages");
});

export { handleLogin, login };
