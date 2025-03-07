const Listing = require("../models/listing");
const Review = require("../models/review");




module.exports.createReview = async (req,res) => {
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
  }

module.exports.deleteReview = async (req,res) => {
    let{id,reviewid}=req.params;
    await Listing.findByIdAndUpdate(id , {$pull:{reviews : reviewid}})  //it deletes from listing tooooo important
    await Review.findOneAndDelete(reviewid)
    req.flash("success","Review Deleted Successfully")
  
    res.redirect(`/listings/${id}`)
  }