"use strict"

const numberOfFilms = +prompt('How many movies did you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: {},
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt ('One of last watched movie?', ''),
          b = prompt ('What rating can you give to this film?');

          if (a != '' &&  b != '' && a != null && b != null && a.length < 50) {
            personalMovieDB.movies[a] = b;
            alert('done!')
          } else {
            alert('Wrong input!')
            i--;
          }
}

if (personalMovieDB.count < 10) {
    alert('Quite a few movies have been watched.');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert('You are classic viewer.');
} else if (personalMovieDB.count > 30) {
    alert("You're a movie fan.") ;
} else {
    alert("An error has occurred.")
}

console.log(personalMovieDB);