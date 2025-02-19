const express = require("express");
const app = express();
const user = require("./Routes/user.js")
const post = require("./Routes/posts.js")
const cookieParser = require("cookie-parser")


app.use(cookieParser("KEY"))     // the KEY is used to encrypt the cookie value and 
                                // eventhough without KEY  we can use the middelware but not signedcookies


app.use(express.json())

app.use("/users",user) // it only matches when path starts with /users
app.use("/posts",post) // it only matches when path starts with /posts


app.get("/", (req, res) => {
    res.send("Hi, I am root");
})




app.get("/setcookies", (req, res) => {
    res.cookie("Greet","Nameste",{signed:true})
    res.cookie("Origin","INDIA",{signed:true})
    res.cookie("Name","Vamshi",{signed:true})
    res.send("Got Cookies");
})


app.get("/verify",(req,res)=>{
    console.log(req.signedCookies)
    res.send("VERIFIED")
})


app.get("/Getcookies", (req, res) => {
    let {Name}= req.cookies
    res.send(`Hi ${Name} `);
})


app.listen(3000, () => {
    console.log("Listening on port 3000");
})
