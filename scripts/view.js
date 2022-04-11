const app = document.getElementById('root')

const anchor = document.createElement('a')
anchor.href = 'index.html'

const logo = document.createElement('img');
logo.setAttribute('class', 'logo')
logo.src = 'assets/ghibli_logo.png';

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(anchor)
anchor.appendChild(logo)
app.appendChild(container)

export const PosterList = (movie) => {
    
    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const anchor = document.createElement('a');
    anchor.setAttribute('href', 'film.html');

    const img = document.createElement('img');
    img.setAttribute('class', 'index-image')
    img.src = movie.image;

    card.addEventListener('click', function(){
        sessionStorage.setItem('movie',JSON.stringify(movie))
    })

    container.appendChild(card)
    card.appendChild(anchor)
    anchor.append(img)
}