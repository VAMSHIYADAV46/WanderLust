const express = require("express")
const router = express.Router()
const Listing = require("../models/listing")
const wrapAsync = require("../utils/wrapAsync")
const ExpressError = require("../utils/ExpressError")
const {listingSchema,reviewSchema} = require("../schema")
const { isLoggedIn , isOwner,validateListing} = require("../middleware.js");
const listingController = require("../controllers/listing.js")

const multer  = require('multer')
const {storage} = require("../cloudConfig.js")
const upload = multer({ storage })





  // Search route
  router.get("/search",listingController.search);


//Index Route
router.get("/",wrapAsync(listingController.index));
  
  
  //New Route
  router.get("/new",
    isLoggedIn,
    wrapAsync(listingController.renderNewForm));
  
  
  //Show Route
  router.get("/:id",
    wrapAsync(listingController.showListing ));
  
  
  //Create Route
  router.post("/", 
    isLoggedIn,
    upload.single('listing[image]'),
    validateListing ,
    wrapAsync(listingController.createListing));

  
  //Edit Route
  router.get("/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.renderEditForm));
  
  
  //Update Route
  router.put("/:id", 
    isLoggedIn,
    isOwner,
    upload.single('listing[image]'),
    validateListing ,
    wrapAsync(listingController.updateListing));
  
  
  //Delete Route
  router.delete("/:id",
    isLoggedIn,
    isOwner, 
    wrapAsync(listingController.deleteListing));





  

module.exports = router;