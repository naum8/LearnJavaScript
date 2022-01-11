const numberOfFilms = +prompt('Сколько фильмов вы смотрели?', '');
const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   private: false
};
const a = prompt('Один из последних просмотренный фильмов?', '');
const b = prompt('На сколько оцените его?', '');
const c = prompt('Один из последних просмотренный фильмов?', '');
const d = prompt('На сколько оцените его?', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);