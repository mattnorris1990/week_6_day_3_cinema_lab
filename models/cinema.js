const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.list_all_films = function () {
  const result = this.films.map((film) => {
    return film.title
  })

  return result
}

Cinema.prototype.findFilmByTitle = function (title) {
  const correctFilm = this.films.find((film) =>  {
    return film.title === title
  })
  return correctFilm

}

Cinema.prototype.filterFilmByGenre = function (genre) {
  const genreList = this.films.filter((film) => {
    return film.genre === genre
  })

  return genreList

}

Cinema.prototype.checkYearFilms = function (year) {
  const checkYear = this.films.some((film) => {
    return film.year === year
  })
  return checkYear
}

Cinema.prototype.checkFilmLengths = function (length) {
  const checkLengths = this.films.every((film) => {
    return film.length > length
  })

  return checkLengths
}

Cinema.prototype.totalRuntime = function() {
  const total = this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length
  }, 0)
  return total
}

Cinema.prototype.filmsByProperty = function (property, value) {

  const propertyList = this.films.filter((film) => {
    return film[property] === value
  })

  return propertyList
}

module.exports = Cinema;
