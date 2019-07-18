const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET movies page*/
router.get("/movies", (req, res, next) => {
  Movie.find({})
  .then(function(movies) {
    res.render("movies", {movies: movies});
  });
});


router.get('/movies/:id/movie-details', (req, res, next) => {
  Movie.findById(req.params.id)
  .then(function(movieDetails) {
    res.render("movie", {movieDetails: movieDetails});
  });
});

module.exports = router;

