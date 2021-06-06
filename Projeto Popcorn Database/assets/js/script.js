const api_url = "https://api.themoviedb.org/3/movie/popular?api_key=3ac59a12f773222a0f0e3bf66560fc56&language=pt-BR&page=1";
const images = "https://image.tmdb.org/t/p/w500";
const search_movies = "https://api.themoviedb.org/3/search/movie?api_key=3ac59a12f773222a0f0e3bf66560fc56&query=";

const section = document.querySelector('section');
const form = document.querySelector('#form');
const search = document.querySelector('#search');

getMovies(api_url);

async function getMovies(url) {
    const res = await fetch(url);
    const resData = await res.json();

    showMoviesBySearch(resData.results);
}

function showMoviesBySearch(movies) {
        section.innerHTML = '';

        movies.forEach(movie => {
        const { poster_path, title, vote_average } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movies');

        movieEl.innerHTML = `
                <img src="${images + poster_path}" alt="${title}" />
                <div class="movie-info">
                    <h2>${title}</h2>
                    <span class="${getRates(vote_average)}">${vote_average}</span>
                </div>
        `;

        section.appendChild(movieEl);
    });
}

function getRates(vote) {
    if(vote >= 7) {
        return 'green';
    } else if (vote >= 5) {
        return 'yellow';
    } else {
        return 'red';
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchMovie = search.value;

    if(searchMovie) {
        getMovies(search_movies + searchMovie);

        search.value = "";
    }
});