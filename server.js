const express = require("express");
const app = express();

const users = {
    name: "Harry",
    surname: "Potter",
    work: "wizzard"
};

app.get("/new", (req, res) => {
    res.send("Something to test here")
})

app.get("/new1", (req, res) => {

})

app.get("/test", (req, res) => {
    res.status(418).send("I am not a teacup")
})

app.get("/users", (req, res) => {
    const look = req.query.look;
    res.json(users[look])
})

app.get("/choco", function (req, res) {
    let searchQuery = req.query.search;
    res.send("Hello World! You searched for " + searchQuery);
  });




app.listen(3001, function () {
    console.log("Server is listening on port 3000. Ready to accept requests!");
  });