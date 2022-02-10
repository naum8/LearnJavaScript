'use strict';
const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   private: false,
   start: function() {
      personalMovieDB.count = +prompt('Сколько фильмов вы смотрели?', '');
      while (personalMovieDB.count == null || personalMovieDB.count == '' || isNaN(personalMovieDB.count)) {
         personalMovieDB.count = +prompt('Сколько фильмов вы смотрели?', '');
      }
   },
   rememberMyFilms: function() {
      for (let i = 0; i < 2; i++) {
         const a = prompt('Один из последних просмотренный фильмов?', '');
         const b = prompt('На сколько оцените его?', '');
         
         if (a != '' && b != '' && a != null && b != null && a.length < 50 ) {
            personalMovieDB.movies[a] = b;  
         } else {
            i--;
         }
      }
   },
   detectPersonalLevel: function() {
      if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
         console.log('Просмотрено довольно мало фильмов');
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
         console.log('Вы классный зритель');
      } else if (personalMovieDB.count >= 30) {
         console.log('Вы киноман');
      } else {
         console.log('Error');
      }
   },
   showMyDB: function() {
      if (personalMovieDB.private === false) {
         console.log(personalMovieDB);
      }
   },
   toggleVisibleMyDB: function() {
      if (personalMovieDB.private) {
         personalMovieDB.private = false;
      } else {
         personalMovieDB.private = true;
      };
   },
   writeYourGenres: function() {
      for (let i = 1; i < 4; i++) {
         const genry = prompt(`Ваш любымый жанр под номером ${i}`);
         if (genry != '' && genry != null) {
            personalMovieDB.genres[i - 1] = genry;
         } else {
            console.log('Вы ввели некорректные данные');
            i--;
         }
      }
      personalMovieDB.genres.forEach((item, i) => {
         console.log(`Любимый жанр ${i + 1} - это ${item}`);
      });
   }
};