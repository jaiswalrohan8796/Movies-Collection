$(document).ready(() => {
    $("#searchForm").on("submit", (err) => {
        $("#searchText").attr("readonly", "readonly");
        let searchText = $("#searchText").val();
        getMovies(searchText);
        err.preventDefault();
    });
});

$("#searchText").click(function () {
    $(this).removeAttr("readonly");
    $(this).focus();
});

function getMovies(searchText) {
    axios
        .get(`https://www.omdbapi.com/?s=${searchText}&apikey=334b05ed`)
        .then((response) => {
            let movies = response.data.Search;
            let output = "";
            if (response.data.Response === "False") {
                output = `<h2 class="text-center my-5">Couldn't find&nbsp;:(</h2>`
            } else {
                $.each(movies, (index, movie) => {
                    output += `
                <div class="movies-list text-center">
                  <div class="card text-center" style="width:16rem">
                    <img class="card-img-top" src='${movie.Poster}'>
                    <div class="card-body">
                        <h3 class="card-title">${movie.Title}&nbsp;(${movie.Year})</h3>
                        <a class="btn btn-primary" href="https://www.imdb.com/title/${movie.imdbID}" >Imdb</a>
                        <a onclick="addToCollection('${movie.Title}','${movie.Year}','${movie.Poster}','${movie.imdbID}')" class="btn btn-warning" href="#">Add</a>
                    </div>
                  </div>
                </div>
                `;
                });
            }

            $("#movies").html(output);
        })
        .catch((err) => {
            console.log(err);
        });
}

function addToCollection(title, year, poster, imdb) {
    const selectedTitle = title;
    const selectedYear = year;
    const selectedPoster = poster;
    const selectedImdb = imdb;

    axios
        .post("https://rj-movies-collection.herokuapp.com/add-movie", {
            title: selectedTitle,
            year: selectedYear,
            poster: selectedPoster,
            imdb: selectedImdb,
        })
        .then(() => {
            location.pathname = "/";
        })
        .catch((err) => console.log(err));
}
