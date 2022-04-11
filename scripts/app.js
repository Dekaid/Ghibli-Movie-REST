import * as http from "./http.js"   //Import hhtp functions
import * as view from "./view.js"   //View functions

const GET_FILMS = `https://ghibliapi.herokuapp.com/films`;

const showFilms = async () => {
    const json = await http.sendGETRequest(GET_FILMS);
    console.log(json)

    json.forEach(movie => {
        view.PosterList(movie);
    });
}


window.start = async () => {
    sessionStorage.clear();
    showFilms();
}

window.addEventListener('load', start);
