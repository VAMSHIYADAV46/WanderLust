const express = require("express");
const app = express();
const user = require("./Routes/user.js")
const post = require("./Routes/posts.js")
const session = require("express-session"); 
const flash = require("connect-flash")
const path = require("path");
const ejsMate = require("ejs-mate")



app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine('ejs', ejsMate);
app.use(flash());



app.use(session({
    secret: "mysecret key",
    resave:false,
    saveUninitialized:true
}))


app.use((req,res,next)=>{
    res.locals.successMsg = req.flash("success")
    res.locals.errorMsg = req.flash("error")
    next();
})



app.get("/register",(req,res)=>{
    let {name="anonymous"}=req.query
    req.session.name = name;
    if ( name == "anonymous") {
        req.flash("error","USER NOT  FOUND")
    }
    else{
        req.flash("error","USER FOUND")
    }
    // console.log(req.session)
    // res.send(name)
    res.redirect("/greet")

})


app.get("/greet",(req,res)=>{
    res.render("index.ejs",{name : req.session.name })
})



// app.get("/test",(req,res)=>{
//     res.send("Testing successfull")
// })


// app.get("/reqcount",(req,res)=>{
//     if ( req.session.count) {
//         req.session.count++;
//     }
//     else{
//         req.session.count=1;
//     }
//     // console.log(`The count is ${req.session.count}`)
//     res.send(`The count is ${req.session.count}`)
// })

// const cookieParser = require("cookie-parser")


// app.use(cookieParser("KEY"))     // the KEY is used to encrypt the cookie value and 
//                                 // eventhough without KEY  we can use the middelware but not signedcookies


// app.use(express.json())

// app.use("/users",user) // it only matches when path starts with /users
// app.use("/posts",post) // it only matches when path starts with /posts


// app.get("/", (req, res) => {
//     res.send("Hi, I am root");
// })




// app.get("/setcookies", (req, res) => {
//     res.cookie("Greet","Nameste",{signed:true})
//     res.cookie("Origin","INDIA",{signed:true})
//     res.cookie("Name","Vamshi",{signed:true})
//     res.send("Got Cookies");
// })


// app.get("/verify",(req,res)=>{
//     console.log(req.signedCookies)
//     res.send("VERIFIED")
// })


// app.get("/Getcookies", (req, res) => {
//     let {Name}= req.cookies
//     res.send(`Hi ${Name} `);
// })


app.listen(3000, () => {
    console.log("Listening on port 3000");
})
