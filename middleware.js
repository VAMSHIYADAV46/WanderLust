const Listing = require("./models/listing.js");
const Review = require("./models/review.js");
const {listingSchema} = require("./schema.js")
const {reviewSchema} = require("./schema.js")
const ExpressError = require("./utils/ExpressError.js")


module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl
        req.flash("error", "Access denied! Please log in to continue.");
        return res.redirect("/login");
    }
    next();
};



module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};



module.exports.isOwner = (req,res,next)=>{
    let id = req.params;
    let listing = Listing.findById(id)
    if (!res.locals.currUser._id && listing.owner._id.equals(res.locals.currUser._id)) {
        req.flash("error","You do not have permission to change the listing")
        return res.redirect(`/listings/${id}`)
    }
    next();
}

module.exports.isReviewAuthor = async (req, res, next) => {
    let{id,reviewid}=req.params;
      let review = await Review.findById(reviewid);
      console.log(review);
      if (!review.author.equals(res.locals.currUser._id)) {
        req.flash("error", "You do not have permission to change the review");
        return res.redirect(`/listings/${id}`);
      }
      next();

  };


module.exports.validateListing = (req,res,next) => {
    const {error} = listingSchema.validate(req.body)
    if(error){
        const msg = error.details.map((el) => el.message).join(',')
        throw new ExpressError(400,msg)
    }else{
        next()
    }
}



module.exports.validateReview = (req,res,next) => {
    const {error} = reviewSchema.validate(req.body)
    if(error){
      const msg = error.details.map((el) => el.message).join(',')
      throw new ExpressError(400,msg)
    }else{
      next()
    }
  }