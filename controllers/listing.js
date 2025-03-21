
const Listing = require("../models/listing")

if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}


//Index Route
// module.exports.index = async (req, res) => {
//   try {
//     const listings = await Listing.find({}); // Fetch all listings
//     res.render("listings/index", { listings }); // Pass listings to the template
//   } catch (err) {
//     console.error(err);
//     req.flash("error", "Cannot find listings");
//     res.redirect("/");
//   }
// };

//Index Route
module.exports.index = async (req, res) => {
  try {
    let { category } = req.query;
    let listings;

    if (category) {
      // Convert to lowercase and trim for consistent comparison
      category = category.toLowerCase().trim();
      listings = await Listing.find({ category: category });
    } else {
      listings = await Listing.find({});
    }

    res.render('listings/index', { listings });
  } catch (err) {
    console.error(err);
    req.flash('error', 'Error fetching listings');
    res.redirect('/');
  }
};


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


//Search Route
module.exports.search = async (req, res) => {
  try {
    const { q } = req.query;
    
    if (!q) {
      return res.redirect("/listings");
    }
    
    const searchQuery = {
      $or: [
        { title: { $regex: q, $options: "i" } },
        { location: { $regex: q, $options: "i" } },
        { description: { $regex: q, $options: "i" } }
      ]
    };
    
    const listings = await Listing.find(searchQuery);
    
    res.render("listings/index", { 
      listings,  // This is important!
      searchQuery: q,
      title: `Search Results for "${q}"` 
    });
    
  } catch (err) {
    console.error(err);
    req.flash("error", "Error searching listings");
    res.redirect("/listings");
  }
}