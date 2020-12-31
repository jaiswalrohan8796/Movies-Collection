import express from "express";
import Movie from "../model/model.js";
const router = express.Router();

router.get("/", (req, res, next) => {
    Movie.find().then((movies) => {
        res.render("home.ejs", { movies: movies });
    });
});
router.delete("/", (req, res, next) => {
    Movie.find().then((movies) => {
        res.render("home.ejs", { movies: movies });
    });
});

router.get("/add-movie", (req, res, next) => {
    res.render("add-movies.ejs");
});
router.post("/add-movie", (req, res, next) => {
    const newMovie = Movie({
        title: req.body.title,
        year: req.body.year,
        poster: req.body.poster,
        imdb: req.body.imdb,
    });
    newMovie
        .save()
        .then(() => {
            res.redirect("http://localhost:3000");
        })
        .catch((err) => console.log(err));
});

router.delete("/:id", (req, res, next) => {
    const id = req.params.id;
    Movie.deleteOne({ _id: id })
        .then((movie) => {
            console.log(`${id} deleted successfully`);
            res.redirect("http://localhost:3000")
        })
        .catch((err) => console.log(err));
});

export default router;
