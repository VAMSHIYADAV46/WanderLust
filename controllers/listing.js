
const Listing = require("../models/listing")

if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}


//Index Route
module.exports.index= async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  }



//New Route
module.exports.renderNewForm =  (req, res) => {
    res.render("listings/new.ejs");
  }


//Show Route
module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews").populate("owner").populate({
        path: "reviews",
        populate: {
            path: "author",  // This ensures author inside reviews gets populated
      }
  });

    res.render("listings/show.ejs", { listing , GOOGLE_API_KEY: process.env.GOOGLE_MAP_API,LOCATIONIQ_ACCESS_TOKEN: process.env.LOCATIONIQ_ACCESS_TOKEN});
  }


//Create Route
module.exports.createListing = async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id; // Assign the current user

    // Check if a file was uploaded
    if (req.file) {
        newListing.image = {
            url: req.file.path,
            filename: req.file.filename
        };
    }

    console.log(req.body.listing);
    await newListing.save();
    req.flash("success", "New Listing Has Been Added");
    res.redirect("/listings");
};




//Edit Route
module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
  }


//Update Route
module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    if(typeof req.file !== "undefined"){
    let url = req.file.path;
    let filename = req.file.filename;

    listing.image = {url, filename}

    listing.save();
    }
    req.flash("success","Listing Has Updated")
    res.redirect(`/listings/${id}`);
  }




//Delete Route
module.exports.deleteListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    req.flash("success","Listing Has Deleted")
    console.log(deletedListing);
    res.redirect("/listings");
  }