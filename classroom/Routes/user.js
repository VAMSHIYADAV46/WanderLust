const express = require("express");
const router = express.Router();


//User routes



//User Show Route
router.get("/", (req, res) => {                  // since it is matched by /users this is considered as /users route
    res.send("user Get Request Index Page");
})


//Show User Route
router.get("/:id", (req, res) => {              // since it is matched by /users this is considered as /users/:id route
    res.send("user Get Request Show Page");
})


//Post User Route (Create User)
router.post("/:id", (req, res) => {             // since it is matched by /users this is considered as /users/:id route but post method
    res.send("user post Request Page");
})


//Delete User Route
router.delete("/:id", (req, res) => {           // since it is matched by /users this is considered as /users/:id route but delete method
    res.send("user Delete Request Page");
})


module.exports = router;
