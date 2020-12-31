import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
    title: String,
    year: String,
    poster:String,
    imdb:String
});

const Movie = mongoose.model("Movie", movieSchema);
export default Movie;
