const express = require("express");
const router = express.Router();

var moment = require('moment');
const User = require("../models/CostomerSchema");




//get data from database
router.get("/", (req, res) => {
  User.find()
    .then((result) => {
      res.render("index", { arr: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
});

//Get pages

router.get("/user/add.html", (req, res) => {
  res.render("user/add");
});

router.get("/edit/:id", (req, res) => {
  User.findById(req.params.id)
    .then((result) => {
      res.render("user/edit", { obj: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/user/search.html", (req, res) => {
  res.render("user/search");
});

router.get("/view/:id", (req, res) => {
  User.findById(req.params.id)
    .then((result) => {
      res.render("user/view", { obj: result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
});

//post Data to database
router.post("/user/add.html", (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

//delete data from database
router.delete("/edit/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

//update data from database

router.put("/edit/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      console.log(result);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
