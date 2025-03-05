const express = require("express")
const router = express.Router()
const Listing = require("../models/listing")
const wrapAsync = require("../utils/wrapAsync")
const ExpressError = require("../utils/ExpressError")
const {listingSchema,reviewSchema} = require("../schema")
const { isLoggedIn , isOwner,validateListing} = require("../middleware.js");



//Index Route
router.get("/", wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  }));
  
  
  //New Route
  router.get("/new",isLoggedIn, (req, res) => {
    res.render("listings/new.ejs");
  });
  
  
  //Show Route
  router.get("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews").populate("owner").populate({
        path: "reviews",
        populate: {
            path: "author",  // This ensures author inside reviews gets populated
      }
  });

    res.render("listings/show.ejs", { listing });
  }));
  
  
  //Create Route
  router.post("/", 
    isLoggedIn,
    validateListing ,
    wrapAsync(async (req, res,next) => {
      const newListing = new Listing(req.body.listing);
      newListing.owner = req.user._id;                   // this for the current user
      console.log(req.body.listing)
      await newListing.save();
      req.flash("success","New Listing Has Added")
      res.redirect("/listings");

  }));
  
  
  //Edit Route
  router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
  }));
  
  
  //Update Route
  router.put("/:id", isLoggedIn,isOwner,wrapAsync(async (req, res) => {
    let { id } = req.params;
      if(!req.body.listing){
        throw new ExpressError(400,"SEND VALID DATA")
      }
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success","Listing Has Updated")
    res.redirect(`/listings/${id}`);
  }));
  
  
  //Delete Route
  router.delete("/:id",isLoggedIn,isOwner, wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    req.flash("success","Listing Has Deleted")
    console.log(deletedListing);
    res.redirect("/listings");
  }));
  

module.exports = router;