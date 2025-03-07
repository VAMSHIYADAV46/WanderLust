const express = require("express")
const router = express.Router({mergeParams : true})
const Review = require("../models/review")
const wrapAsync = require("../utils/wrapAsync")
const ExpressError = require("../utils/ExpressError")
const {listingSchema,reviewSchema} = require("../schema")
const Listing = require("../models/listing.js");   
const {validateReview,isLoggedIn,isReviewAuthor} = require("../middleware.js")
const reviewController = require("../controllers/reviews.js")




// Review Routes

  //Post Review Route
  router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview))
  

  //Post Delete Route
  router.delete("/:reviewid",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.deleteReview))


module.exports = router