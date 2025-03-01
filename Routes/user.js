const express = require("express")
const router = express.Router({mergeParams : true})
const User = require("../models/user")
const wrapAsync = require("../utils/wrapAsync")
const passport = require("passport")



router.get("/signup",(req,res)=>{
    res.render("users/signup.ejs")
})


router.post("/signup",wrapAsync(async(req,res)=>{
    let{username,email,password}=req.body
    let newUser = new User({username,email})
    registeredUser = await User.register(newUser,password)
    console.log(registeredUser)
    req.flash("success","Welcome to Wanderlust")
    res.redirect("/listings")
    res.send("success")
}))



router.get("/login",(req,res)=>{
    res.render("users/login.ejs")
})





router.post("/login", passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true
}), (req, res) => {
    req.flash("success", "Welcome Back " + req.user.username + "!" );
    res.redirect("/listings");
});


module.exports=router;