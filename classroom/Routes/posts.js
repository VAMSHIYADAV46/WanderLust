const express = require("express");
const router = express.Router();



//Post Routes

//Post Index Route
router.get("/", (req, res) => {                      // since it is matched by /posts this is considered as /posts route
    res.send("post Get Request Index Page");
})  

//Post Show Route
router.get("/:id", (req, res) => {                  // since it is matched by /posts this is considered as /posts/:id route
    res.send("post Get Request Show Page");
})


//Post Create Route (Create Post)
router.post("/:id", (req, res) => {                // since it is matched by /posts this is considered as /posts/:id route but post method
    res.send("post Post Request Page");
})  


//Post Delete Route 
router.delete("/:id", (req, res) => {             // since it is matched by /posts this is considered as /posts/:id route but delete method
    res.send("post Delete Request Page");
})


module.exports = router;