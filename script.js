//Swiper
var swiper = new Swiper('.main-slider', {
    
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});



var swiper = new Swiper('.list-slider', {
    loop: true,

    navigation: {
        nextEl: '.next-list',
        prevEl: '.prev-list',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});





//API SERVICES

const BASE_URL = `https://api.themoviedb.org`;
const BASE_IMAGE = `https://image.tmdb.org/t/p/w500`;


// const mainPoster = document.getElementById('content')
const movie_top_rated = document.getElementById('flexbox-container');
const movie_upcoming = document.getElementById('flexbox-container2');
const movie_popular = document.getElementById('flexbox-container3');
// const movie_now_playing = document.getElementById('flexbox-containerx');
const tv_popular = document.getElementById('flexbox-container4');
const tv_on_air = document.getElementById('flexbox-container5');
const tv_top_rated = document.getElementById('flexbox-container6');


//URL API

const TOP_RATED_API = BASE_URL + '/3/movie/top_rated?api_key=2d51650e8cf7b5a2d13b814001a0dd30';
const NOW_PLAYING_API = BASE_URL + '/3/movie/now_playing?api_key=2d51650e8cf7b5a2d13b814001a0dd30';
const UPCOMING_API = BASE_URL + '/3/movie/upcoming?api_key=2d51650e8cf7b5a2d13b814001a0dd30';
const POPULAR_API = BASE_URL + '/3/movie/popular?api_key=2d51650e8cf7b5a2d13b814001a0dd30';
const SERIES_API = BASE_URL + '/3/tv/popular?api_key=2d51650e8cf7b5a2d13b814001a0dd30';
const SERIES_ON_AIR_API = BASE_URL + '/3/tv/on_the_air?api_key=2d51650e8cf7b5a2d13b814001a0dd30';
const SERIES_TOP_RATED_API = BASE_URL + '/3/tv/top_rated?api_key=2d51650e8cf7b5a2d13b814001a0dd30';


// MAIN POSTER API
// getMoviesPlaying(NOW_PLAYING_API);

// function getMoviesPlaying(url) {
//     fetch(url).then(res => res.json()).then(data => {
//         console.log(data.results);
//         showMoviesPlaying(data.results);
//     })
// }

// function showMoviesPlaying(data) {
//     mainPoster.innerHTML = '';


//     data.forEach(movie => {
//         const { title, poster_path, overview, release_date } = movie;

//         const movieEl = document.createElement('div');
//         movieEl.classList.add('content')
//         movieEl.innerHTML = `
//         <div class="main-poster"><img src="${BASE_IMAGE + poster_path}" alt="poster"></div>
//                 <div class="color-gradient-poster"></div>
//                 <div class="color-gradient"></div>
//                 <div class="movie-title">${title}</div>
//                 <div class="movie-genre">${release_date}</div>
//                 <div class="movie-description">${overview}
//                 </div>
//         `
//         mainPoster.appendChild(movieEl);
//     })

// }

getMoviesList(TOP_RATED_API);

function getMoviesList(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showMoviesList(data.results);
    })
}

function showMoviesList(data) {
    movie_top_rated.innerHTML = '';
    // mainPoster.innerHTML = '';

    data.forEach(movie => {
        const { title, poster_path, overview, release_date } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('flexbox-container')
        movieEl.innerHTML = `
        <div class="swiper-slide" id="flexbox-container">
                            <div class="flexbox-item flexbox-item-1"><img src="${BASE_IMAGE + poster_path}" alt=""></div>
                    </div>
        `
        movie_top_rated.appendChild(movieEl);


    })

}






getMoviesUpcoming(UPCOMING_API);

function getMoviesUpcoming(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showMoviesUpcoming(data.results);
    })
}

function showMoviesUpcoming(data) {
    movie_upcoming.innerHTML = '';

    data.forEach(movie => {
        const { title, poster_path, overview, release_date } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('flexbox-container2')
        movieEl.innerHTML = `
        <div class="swiper-slide" id="flexbox-container2">
                            <div class="flexbox-item flexbox-item-1"><img src="${BASE_IMAGE + poster_path}" alt=""></div>
                    </div>
        `
        movie_upcoming.appendChild(movieEl);


    })

}

getMoviesPopular(POPULAR_API);

function getMoviesPopular(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showMoviesPopular(data.results);
    })
}

function showMoviesPopular(data) {
    movie_popular.innerHTML = '';

    data.forEach(movie => {
        const { title, poster_path, overview, release_date } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('flexbox-container3')
        movieEl.innerHTML = `
        <div class="swiper-slide" id="flexbox-container3">
                            <div class="flexbox-item flexbox-item-1"><img src="${BASE_IMAGE + poster_path}" alt=""></div>
                    </div>
        `
        movie_popular.appendChild(movieEl);


    })

}

getMoviesPlaying(NOW_PLAYING_API);

function getMoviesPlaying(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showMoviesPlaying(data.results);
    })
}

function showMoviesPlaying(data) {
    movie_now_playing.innerHTML = '';

    data.forEach(movie => {
        const { title, poster_path, overview, release_date } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('flexbox-containerx')
        movieEl.innerHTML = `
        <div class="swiper-slide" id="flexbox-containerx">
                            <div class="flexbox-item flexbox-item-1"><img src="${BASE_IMAGE + poster_path}" alt=""></div>
                    </div>
        `
        movie_now_playing.appendChild(movieEl);


    })

}

getSeriesPopular(SERIES_API);

function getSeriesPopular(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showSeriesPopular(data.results);
    })
}

function showSeriesPopular(data) {
    tv_popular.innerHTML = '';

    data.forEach(movie => {
        const { title, poster_path, overview, release_date } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('flexbox-container4')
        movieEl.innerHTML = `
        <div class="swiper-slide" id="flexbox-container4">
                            <div class="flexbox-item flexbox-item-1"><img src="${BASE_IMAGE + poster_path}" alt=""></div>
                    </div>
        `
        tv_popular.appendChild(movieEl);


    })

}


getSeriesLatest(SERIES_ON_AIR_API);

function getSeriesLatest(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showSeriesLatest(data.results);
    })
}

function showSeriesLatest(data) {
    tv_on_air.innerHTML = '';

    data.forEach(movie => {
        const { title, poster_path, overview, release_date } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('flexbox-container5')
        movieEl.innerHTML = `
        <div class="swiper-slide" id="flexbox-container5">
                            <div class="flexbox-item flexbox-item-1"><img src="${BASE_IMAGE + poster_path}" alt=""></div>
                    </div>
        `
        tv_on_air.appendChild(movieEl);


    })

}

getSeriesTopRated(SERIES_TOP_RATED_API);

function getSeriesTopRated(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showSeriesTopRated(data.results);
    })
}

function showSeriesTopRated(data) {
    tv_top_rated.innerHTML = '';

    data.forEach(movie => {
        const { title, poster_path, overview, release_date } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('flexbox-container6')
        movieEl.innerHTML = `
        <div class="swiper-slide" id="flexbox-container6">
                            <div class="flexbox-item flexbox-item-1"><img src="${BASE_IMAGE + poster_path}" alt=""></div>
                    </div>
        `
        tv_top_rated.appendChild(movieEl);


    })

}


const form = document.getElementById('form');
const search = document.getElementById('search');

const searchUrl = BASE_URL + '/search/movie?api_key=2d51650e8cf7b5a2d13b814001a0dd30';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const searchTrem = search.value;
    if(searchTrem) {
        getMoviesPopular(searchUrl + '&query=' + searchTrem)
    }
})