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


const listing = require("./Routes/listing.js");
const review = require("./Routes/review.js");

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

// app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
  res.send("Hi, I am root");
});




app.use("/listings",listing)
app.use("/listings/:id/reviews",review)

  
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




