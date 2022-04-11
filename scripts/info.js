const about = document.getElementById('film-info')
const film_string = sessionStorage.getItem('movie')
const film = JSON.parse(film_string)

const anchor = document.createElement('a')
anchor.href = 'index.html'

const logo = document.createElement('img');
logo.setAttribute('class', 'logo')
logo.src = 'assets/ghibli_logo.png';

//=========================================================
const container = document.createElement('div')
container.setAttribute('class', 'info-container')
//--------------------------------------------------------
const h1 = document.createElement('h1');
h1.setAttribute('class', 'title')
h1.textContent = film.title;
//--------------------------------------------------------
const img = document.createElement('img');
img.setAttribute('class','banner')
img.src = film.movie_banner;
//--------------------------------------------------------
const p = document.createElement('p');
p.setAttribute('class', 'description')
p.textContent = film.description;
//--------------------------------------------------------
const other = document.createElement('p');
other.innerHTML = `
    Alternative Title: ${film.original_title}, ${film.original_title_romanised} <br>
    Directed by ${film.director} and Produced by ${film.producer}<br>
    Released in ${film.release_date}<br>
    Length time: ${film.running_time} minutes <br>
    Rotten Tomatoes Score: ${film.rt_score}%
    `;
//=========================================================
about.appendChild(anchor)
anchor.appendChild(logo)
about.appendChild(container)

container.appendChild(h1)
container.appendChild(img)
container.appendChild(p)
container.appendChild(other)
