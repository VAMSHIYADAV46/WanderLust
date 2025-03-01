const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate")
const wrapAsync = require("./utils/wrapAsync.js")
const ExpressError = require("./utils/ExpressError.js")
const Review = require("./models/review.js");
const {listingSchema,reviewSchema} = require("./schema.js")
const session = require("express-session")
const flash = require("connect-flash")
const passport = require("passport")
const LocalStrategy =require("passport-local")
const User = require("./models/user.js") 


const listingRouter = require("./Routes/listing.js");
const reviewRouter = require("./Routes/review.js");
const userRouter = require("./Routes/user.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";




main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

sessionOptions = {
  secret: "mysecret key",
  resave:false,
  saveUninitialized:true,
  cookie:{
    express: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly :true
  }
}


app.get("/", (req, res) => {
  res.send("Hi, I am root");
});



app.use(session(sessionOptions))
app.use(flash())



app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req,res,next)=>{
  res.locals.success = req.flash("success")
  res.locals.error = req.flash("error");
  next();
})




// app.get("/demouser",async(req,res)=>{
//   // let fakeUser = new User({
//   //   email : "nanidx48@gmail.com",
//   //   username : "naniluuuuuu"
//   // })

//   // let registeredUser =await User.register(fakeUser, "nani0541X")
//   res.send(registeredUser)
// })



app.use("/listings",listingRouter)
app.use("/listings/:id/reviews",reviewRouter)
app.use("/",userRouter)





  
// app.get("/testListing", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "My New Villa",
//     description: "By the beach",
//     price: 1200,
//     location: "Calangute, Goa",
//     country: "India",
//   });

//   await sampleListing.save();
//   console.log("sample was saved");
//   res.send("successful testing");
// });


app.all("*",(req,res,next)=>{
  next(new ExpressError(404,"PAGE NOT FOUND"))
})


app.use((err,req,res,next)=>{
  let{status=500,message="SOMETHING WENT WRONG"}=err
  res.render("listings/error.ejs",{err})
  // res.status(status).send(message);
})


app.listen(8080, () => {
  console.log("server is listening to port 8080");
});





