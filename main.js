'use strict';

let numberOfFilms;

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

rememberMyFilms();

personalRate();

console.log(`Вы посмотрели ${numberOfFilms} фильмов`);

writeYourGenres();

showMyDB();

function writeYourGenres(){
    for(let i = 0; i < 3; i++){
personalMovieDB.genres[i]=prompt(`Ваш любимый жанр № ${i+1}?`)
    }
}

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?');
    while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?');
    }
}

function showMyDB(){
 if (personalMovieDB.privat == false){
     console.log(personalMovieDB)
 }   
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из последних фильмов?');
        let b = prompt('Как вы его оцените?');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--
        }
    }
}

function personalRate() {
    if (numberOfFilms < 10) {
        console.log('Просмотрено довольно мало фильмов')
    } else if (numberOfFilms < 30) {
        console.log('Вы классический зритель')
    } else if (numberOfFilms >= 30) {
        console.log('Вы - киноман')
    } else {
        console.log('error')
    }
}