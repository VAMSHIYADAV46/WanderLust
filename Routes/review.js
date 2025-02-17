const express = require("express")
const router = express.Router({mergeParams : true})
const Review = require("../models/review")
const wrapAsync = require("../utils/wrapAsync")
const ExpressError = require("../utils/ExpressError")
const {listingSchema,reviewSchema} = require("../schema")
const Listing = require("../models/listing.js");   


const validateReview = (req,res,next) => {
    const {error} = reviewSchema.validate(req.body)
    if(error){
      const msg = error.details.map((el) => el.message).join(',')
      throw new ExpressError(400,msg)
    }else{
      next()
    }
  }



  
  // Review Route
  //Post Review Route
  
  
  router.post("/",validateReview,wrapAsync(async (req,res) => {
    let id = req.params.id
    let listing = await Listing.findById(req.params.id)
    let newReview = new Review(req.body.review)
    
  
    await newReview.save()
  
    listing.reviews.push(newReview)
    
    
    
    await listing.save()
    res.redirect(`/listings/${id}`)
  }))
  
  
  
  //Post Delete Route
  router.delete("/:reviewid",wrapAsync(async (req,res) => {
    let{id,reviewid}=req.params;
    await Listing.findByIdAndUpdate(id , {$pull:{reviews : reviewid}})  //it deletes from listing tooooo important
    await Review.findOneAndDelete(reviewid)
  
    res.redirect(`/listings/${id}`)
  }))




module.exports = router