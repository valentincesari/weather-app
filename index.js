const apiKey = 'd6fd739a240887abed70b218b776988d'
posterUrl = 'https://image.tmdb.org/t/p/original'

const searchInput = document.getElementById('searchInput')
const searchButton = document.getElementById('searchButton')

const resultsContainer = document.getElementById('resultsContainer')

searchButton.addEventListener('click', getMovies)
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        getMovies()
    }
})


function getMovies() {

    let inputValue = document.getElementById('searchInput').value

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${inputValue}`)
        .then(res => res.json())
        .then(res => displayMovies(res.results))
}

function displayMovies(movies) {

    resultsContainer.innerHTML = ''

    if (movies.length === 0) {
        let message = document.createElement('h2')
        message.innerText = 'No se han encontrado películas...'

        resultsContainer.appendChild(message)
    }

    movies.forEach(movie => {
        let movieContainer = document.createElement('div')
        movieContainer.classList.add('movieContainer')

        let posterContainer = document.createElement('div')
        posterContainer.classList.add('posterContainer')

        let moviePoster = document.createElement('img')
        moviePoster.src = posterUrl + movie.poster_path
        moviePoster.classList.add('moviePoster')

        resultsContainer.appendChild(movieContainer)
        movieContainer.appendChild(posterContainer)
        posterContainer.appendChild(moviePoster)
    });
}