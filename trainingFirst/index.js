'use strict';
let numberOfFilms;

function start() {
   numberOfFilms = +prompt('Сколько фильмов вы смотрели?', '');
   while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('Сколько фильмов вы смотрели?', '');
   }
}
start();

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   private: false
};

function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренный фильмов?', '');
      const b = prompt('На сколько оцените его?', '');
      
      if (a != '' && b != '' && a != null && b != null && a.length < 50 ) {
         personalMovieDB.movies[a] = b;  
      } else {
         i--;
      }
   }
}
//rememberMyFilms();

function detectPersonalLevel() {
   if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
      console.log('Просмотрено довольно мало фильмов');
   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
      console.log('Вы классный зритель');
   } else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман');
   } else {
      console.log('Error');
   }
}
//detectPersonalLevel();

function showMyDB() {
   if (personalMovieDB.private === false) {
      console.log(personalMovieDB);
   }
}
showMyDB();
function writeYourGenres() {
   for (let i = 1; i < 4; i++) {
      const genry = prompt(`Ваш любымый жанр под номером ${i}`);
      personalMovieDB.genres[i - 1] = genry;
   }
} 
writeYourGenres();