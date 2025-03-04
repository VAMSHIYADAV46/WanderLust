const express = require("express")
const router = express.Router({mergeParams : true})
const User = require("../models/user")
const wrapAsync = require("../utils/wrapAsync")
const passport = require("passport")
const { saveRedirectUrl } = require("../middleware")



router.get("/signup",(req,res)=>{
    res.render("users/signup.ejs")
})


router.post("/signup",wrapAsync(async(req,res)=>{
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
}))




router.get("/login",(req,res)=>{
    res.render("users/login.ejs")
})






router.post("/login", 
    saveRedirectUrl,
    passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true
}), (req, res) => {
    req.flash("success", "Welcome Back " + req.user.username + "!" );
    let redirectUrl = res.locals.redirectUrl || "/listings"
    res.redirect(redirectUrl);
});


router.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err);  // Handle logout error
        req.flash("success", "You have been logged out!");
        res.redirect("/listings");  // Redirect after successful logout
    });
});



module.exports=router;