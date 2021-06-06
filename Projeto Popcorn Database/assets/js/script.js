const api_url = "https://api.themoviedb.org/3/movie/popular?api_key=3ac59a12f773222a0f0e3bf66560fc56&language=pt-BR&page=1";
const images = "https://image.tmdb.org/t/p/w500";
const section = document.querySelector('section');

async function getMovies() {
    const res = await fetch(api_url);
    const resData = await res.json();

    console.log(resData);

    resData.results.forEach(movie => {
        const { poster_path, title, vote_average } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movies');

        movieEl.innerHTML = `
                <img src="${images + poster_path}" alt="${title}" />
                <div class="movie-info">
                    <h2>${title}</h2>
                    <span>${vote_average}</span>
                </div>
        `;

        section.appendChild(movieEl);
    });

    return resData;
}

getMovies();