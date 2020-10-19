'use strict';
// pull test is ok

let personalMovieDB = {
    count: '',
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Один из последних фильмов?');
            let b = prompt('Как вы его оцените?');
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--
            }
        }
    },
    personalRate() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов')
        } else if (personalMovieDB.count < 30) {
            console.log('Вы классический зритель')
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы - киноман')
        } else {
            console.log('error')
        }
    },
    writeYourGenres() {
        for (let i = 0; i < 3; i++) {
            let d = prompt(`Ваш любимый жанр № ${i+1}?`)
            if (d != null && d != '') {
                personalMovieDB.genres[i] = d
            } else {
                i--
            }
        }
    },
    showMyDB() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB)
        }
    },
    start() {
        personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?');
        while (personalMovieDB.count == null || personalMovieDB.count == '' || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?');
        }
    }
}

personalMovieDB.start();
personalMovieDB.personalRate();
personalMovieDB.rememberMyFilms();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
