'use strict';
// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false,
//     start: function() {
//         personalMovieDB.count = +prompt('Сколько фильмов вы смотрели?', '');
//         while (personalMovieDB.count == null || personalMovieDB.count == '' || isNaN(personalMovieDB.count)) {
//         personalMovieDB.count = +prompt('Сколько фильмов вы смотрели?', '');
//         }
//     },
//     rememberMyFilms: function() {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних просмотренный фильмов?', '');
//             const b = prompt('На сколько оцените его?', '');
//             if (a != '' && b != '' && a != null && b != null && a.length < 50 ) {
//                 personalMovieDB.movies[a] = b;  
//             } else {
//             i--;
//             }
//         }
//     },
//     detectPersonalLevel: function() {
//         if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
//             console.log('Просмотрено довольно мало фильмов');
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
//             console.log('Вы классный зритель');
//         } else if (personalMovieDB.count >= 30) {
//             console.log('Вы киноман');
//         } else {
//             console.log('Error');
//         }
//     },
//     showMyDB: function() {
//         if (personalMovieDB.private === false) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function() {
//         if (personalMovieDB.private) {
//             personalMovieDB.private = false;
//         } else {
//             personalMovieDB.private = true;
//         };
//     },
//     writeYourGenres: function() {
//         for (let i = 1; i < 4; i++) {
//             const genry = prompt(`Ваш любымый жанр под номером ${i}`);
//             if (genry != '' && genry != null) {
//             personalMovieDB.genres[i - 1] = genry;
//             } else {
//             console.log('Вы ввели некорректные данные');
//             i--;
//             }
//         }
//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
//     }
// };

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    const adv = document.querySelectorAll('.promo__adv img');
    const poster = document.querySelector('.promo__bg');
    const genre = document.querySelector('.promo__genre');
    const movieList = document.querySelector('.promo__interactive-list');
    const addForm = document.querySelector('form.add');
    const addInput = addForm.querySelector('.adding__input');
    const checkbox = addForm.querySelector('[type="checkbox"]'); 

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0,22)}...`
            };
            if (favorite) {
                console.log('Добавляем любимый фильм');
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies); 

            createMovieList(movieDB.movies, movieList);
        }
        

        event.target.reset();
    })
    
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    deleteAdv(adv);

    const makeChenges = () => {
        genre.textContent = 'Драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    makeChenges();

    const sortArr = (arr) => {
        arr.sort();
    };
    
    function createMovieList(film, parent) {
        parent.innerHTML = '';
        sortArr(film);

        movieDB.movies.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item"> ${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i,1);

                createMovieList(movieDB.movies, movieList);
            });
        });
    }

    createMovieList(movieDB.movies, movieList);
})



