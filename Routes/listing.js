const exprees = require("express")
const router = exprees.Router()
const Listing = require("../models/listing")
const wrapAsync = require("../utils/wrapAsync")
const ExpressError = require("../utils/ExpressError")
const {listingSchema,reviewSchema} = require("../schema")


const validateListing = (req,res,next) => {
    const {error} = listingSchema.validate(req.body)
    if(error){
        const msg = error.details.map((el) => el.message).join(',')
        throw new ExpressError(400,msg)
    }else{
        next()
    }
}




//Index Route
router.get("/", wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  }));
  
  
  //New Route
  router.get("/new", (req, res) => {
    res.render("listings/new.ejs");
  });
  
  
  //Show Route
  router.get("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    res.render("listings/show.ejs", { listing });
  }));
  
  
  //Create Route
  router.post("/", validateListing , wrapAsync(async (req, res,next) => {
    try{
      if(!req.body.listing){
        throw new ExpressError(400,"SEND VALID DATA")
      }
      const newListing = new Listing(req.body.listing);
      console.log(req.body.listing)
      await newListing.save();
      res.redirect("/listings");
    }catch(err){
      next(err)
    }
  }));
  
  
  //Edit Route
  router.get("/:id/edit", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
  }));
  
  
  //Update Route
  router.put("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
      if(!req.body.listing){
        throw new ExpressError(400,"SEND VALID DATA")
      }
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
  }));
  
  
  //Delete Route
  router.delete("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
  }));
  

module.exports = router;