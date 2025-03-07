const User = require("../models/user")


//Render Signup Form
module.exports.renderSignupForm = (req,res)=>{
    res.render("users/signup.ejs")
}


//Signup Route
module.exports.signup = async(req,res)=>{
    let{username,email,password}=req.body
    let newUser = new User({username,email})
    registeredUser = await User.register(newUser,password)
    req.login(registeredUser,((err)=>{
        if (err) {
            return next(err);
        }
        console.log(registeredUser)
        req.flash(`success`,`Welcome to Wanderlust  `+username+` !`)
        res.redirect("/listings")
    }))
}


//Render Login Form
module.exports.renderLoginForm = (req,res)=>{
    res.render("users/login.ejs")
}


//Login Route
module.exports.login = (req, res) => {
    req.flash("success", "Welcome Back " + req.user.username + "!" );
    let redirectUrl = res.locals.redirectUrl || "/listings"
    res.redirect(redirectUrl);
}


//Logout Route
module.exports.logout =  (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err);  // Handle logout error
        req.flash("success", "You have been logged out!");
        res.redirect("/listings");  // Redirect after successful logout
    });
}