const express = require("express");
const app = express();
const user = require("./Routes/user.js")
const post = require("./Routes/posts.js")
const sesion = require("express-session")


app.use(sesion({
    secret: "mysecret key",
    resave:false,
    saveUninitialized:true
}))


app.get("/register",(req,res)=>{
    let {name}=req.query

    if (!name) {
        return res.status(400).send("Name is required");
    }

    req.session.name = name;
    console.log(req.session)
    res.send(name)
})


app.get("/greet",(req,res)=>{
    res.send(`Hello ${req.session.name} !`)
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
