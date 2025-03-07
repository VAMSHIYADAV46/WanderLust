const express = require("express")
const router = express.Router({mergeParams : true})
const User = require("../models/user")
const wrapAsync = require("../utils/wrapAsync")
const passport = require("passport")
const { saveRedirectUrl } = require("../middleware")

const userController = require("../controllers/user.js")



// Render Signup Form
router.get("/signup",userController.renderSignupForm)


//Signup Route
router.post("/signup",wrapAsync(userController.signup))


//Render Login Form
router.get("/login",userController.renderLoginForm)


//Login Route
router.post("/login", 
    saveRedirectUrl,
    passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true
}), userController.login);


//Logout Route
router.get("/logout",userController.logout);



module.exports=router;