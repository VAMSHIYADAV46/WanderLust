
const Listing = require("../models/listing")



module.exports.index= async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  }



module.exports.renderNewForm =  (req, res) => {
    res.render("listings/new.ejs");
  }



module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews").populate("owner").populate({
        path: "reviews",
        populate: {
            path: "author",  // This ensures author inside reviews gets populated
      }
  });

    res.render("listings/show.ejs", { listing });
  }


module.exports.createListing = async (req, res,next) => {
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;                   // this for the current user
    console.log(req.body.listing)
    await newListing.save();
    req.flash("success","New Listing Has Added")
    res.redirect("/listings");

}



module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
  }


module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
      if(!req.body.listing){
        throw new ExpressError(400,"SEND VALID DATA")
      }
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success","Listing Has Updated")
    res.redirect(`/listings/${id}`);
  }

module.exports.deleteListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    req.flash("success","Listing Has Deleted")
    console.log(deletedListing);
    res.redirect("/listings");
  }