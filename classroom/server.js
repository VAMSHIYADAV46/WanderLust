const express = require("express");
const app = express();
const user = require("./Routes/user.js")
const post = require("./Routes/posts.js")

app.use(express.json())

app.use("/users",user) // it only matches when path starts with /users
app.use("/posts",post) // it only matches when path starts with /posts


app.get("/", (req, res) => {
    res.send("Hi, I am root");
})


app.listen(3000, () => {
    console.log("Listening on port 3000");
})
