const express = require('express');
const router = express.Router();

router.use(logger);

router.get("/", (req, res) => {
  res.send("User List");
})

router.get("/new", (req, res) => {
  //res.send("User New Form");
  //res.render("users/new", {firstName: "Test"});
  res.render("users/new");
})

router.post("/", (req, res) => {
  // res.send("Create User");
  const isValid = true;
  console.log(req.body.firstName);
  res.send("HIII");
})

router.get("/:id", (req, res) => {
  console.log(req.user);
  res.send(`Get User With ID ${req.params.id}`)
})
  .put((req, res) => {
    res.send(`Update User With ID ${req.params.id}`)
  })
  .delete((req, res) => {
    res.send(`Delete User With ID ${req.params.id}`)
  })

//const users = [{ name: "Kyle" }, { name: "Sally" }]
router.param("id", (req, res, next, id) => {
  //  console.log(id);
  //  req.user = users[id];
  next();
})

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

module.exports = router;