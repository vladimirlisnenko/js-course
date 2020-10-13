const numberOfFilms = prompt('Сколько фильмов вы посмотрели?');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

for (let i = 0; i < 2; i++){
    a = prompt('Один из последних фильмов?');
    b = prompt('Как вы его оцените?');
personalMovieDB.movies[a] = b;
}
// a = prompt('Один из последних фильмов?');
// b = prompt('Как вы его оцените?');
// c = prompt('Один из последних фильмов?');
// d = prompt('Как вы его оцените?');
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
console.log(personalMovieDB);