const express = require("express")
const router = express.Router({mergeParams : true})
const Review = require("../models/review")
const wrapAsync = require("../utils/wrapAsync")
const ExpressError = require("../utils/ExpressError")
const {listingSchema,reviewSchema} = require("../schema")
const Listing = require("../models/listing.js");   
const {validateReview,isLoggedIn,isReviewAuthor} = require("../middleware.js")






  
  // Review Route
  //Post Review Route
  
  
  router.post("/",isLoggedIn,validateReview,wrapAsync(async (req,res) => {
    let id = req.params.id
    let listing = await Listing.findById(req.params.id)
    let newReview = new Review(req.body.review)
    newReview.author = req.user._id
    console.log(newReview)
    
  
    await newReview.save()
  
    listing.reviews.push(newReview)
    
    await listing.save()
    req.flash("success","Review Added Successfully")
    res.redirect(`/listings/${id}`)
  }))
  
  
  
  //Post Delete Route
  router.delete("/:reviewid",isLoggedIn,isReviewAuthor,wrapAsync(async (req,res) => {
    let{id,reviewid}=req.params;
    await Listing.findByIdAndUpdate(id , {$pull:{reviews : reviewid}})  //it deletes from listing tooooo important
    await Review.findOneAndDelete(reviewid)
    req.flash("success","Review Deleted Successfully")
  
    res.redirect(`/listings/${id}`)
  }))




module.exports = router