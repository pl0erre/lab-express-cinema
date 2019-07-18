const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET movies page*/
router.get("/movies", (req, res, next) => {
  Movie.find({}).then(function(movies) {
    res.render("movies", { movies: movies });
  });
});

module.exports = router;
