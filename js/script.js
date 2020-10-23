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

const img = document.querySelectorAll('.promo__adv img');

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

const interactiveList = document.querySelector('.promo__interactive-list');
const input = document.querySelector('.adding__input');
const deleteFilm = document.querySelectorAll('.delete');
const checkBox = document.querySelector('[type=checkbox]');
const form = document.querySelector('.add');

function createFilmsList(parent, arr) {
    parent.innerHTML = '';
    arr.sort();
    arr.forEach((film, i) => {
        parent.innerHTML += `<li class="promo__interactive-item">${i+1}. ${film}<div class="delete"></div></li>`;
    });
    document.querySelectorAll('.delete').forEach((item, i) => {
        item.addEventListener('click', () => {
            item.parentElement.remove();
            arr.splice(i,1);
            createFilmsList(parent, arr);
        })
    });
}

// 5) Добавить нумерацию выведенных фильмов ^

// li.forEach((item,i) =>{
//     item.textContent = `${i+1}. `+sortMovies[i]
// });


/* Задания на урок: Урок 33.

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


//  1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
// новый фильм добавляется в список. Страница не должна перезагружаться.
// Новый фильм должен добавляться в movieDB.movies.

// const promoInteractiveList = document.querySelector('.promo__interactive-list');
// const btn = document.querySelector('button');


createFilmsList(interactiveList, movieDB.movies);

const addFilmByClick = (e) => {
    e.preventDefault(0);
    if (input.value) {
        checkLengthFilmName();
        movieDB.movies.push(input.value);
        createFilmsList(interactiveList, movieDB.movies);
        isCheckBoxChecked();
        e.target.reset();
    }
};

form.addEventListener('submit', addFilmByClick);


// 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
function checkLengthFilmName() {
    if (input.value.length > 21) {
        input.value = `${input.value.substr(0, 21)}...`
    }
}

// 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)


// document.querySelectorAll('.delete').forEach((item, i) => {
//     item.addEventListener('click', () => {
//         item.parentElement.remove();
//         arr.splice(i,1);
//         createFilmsList(tag, arr);
//     })
// });

// 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: "Добавляем любимый фильм"

function isCheckBoxChecked() {
    if (checkBox.checked){
        console.log("Добавляем любимый фильм")
    }
}