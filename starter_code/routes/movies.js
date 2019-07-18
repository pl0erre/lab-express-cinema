const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET movies page*/
router.get("/movies", (req, res, next) => {
  Movie.find({})
  .then(function(movies) {
    res.render("movies", { movies: movies });
  });
});


router.get('/movies/:id/movie-details', (req, res, next) => {
  debugger
  Movie.findById(req.params.id)
  .then(movieDetails => {
    debugger
    res.render("movie", {movieDetails});
  });
});

module.exports = router;

