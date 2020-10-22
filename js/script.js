/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
// 1) Удалить все рекламные блоки со страницы (правая часть сайта)

const    img = document.querySelectorAll('.promo__adv img');

img.forEach(item => {
    item.remove()
});

// 2) Изменить жанр фильма, поменять "комедия" на "драма"

const promoGenre = document.querySelector('.promo__genre');
promoGenre.textContent = 'ДРАМА';

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.

const promoBg = document.querySelector('.promo__bg');
promoBg.style.backgroundImage = 'url("img/bg.jpg")';

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла. Отсортировать их по алфавиту  

const movieName = document.querySelectorAll('.promo__interactive-item');

movieDB.movies.sort()
movieName.forEach((item,i) =>{
    item.textContent = `${i+1}. `+movieDB.movies[i]
});

// 5) Добавить нумерацию выведенных фильмов ^

// li.forEach((item,i) =>{
//     item.textContent = `${i+1}. `+sortMovies[i]
// });