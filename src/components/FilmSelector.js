import React from "react";

const FilmSelector = ({films, onFilmSelected}) => {

    const handleSelect = (event) => {
        const selectedFilm = films[event.target.value];
        onFilmSelected(selectedFilm)
    };

    const filmsToSelect = films.sort((a,b) => {
        const filmA = a.title
        const filmB = b.title
        if (filmA < filmB) {
            return -1
        }
        else if (filmA > filmB) {
            return 1
        }
        else return 0
    }).map((film, index) => {
        return <option key={index} value={index}>{film.title}</option>});


    return (
        <select id="film-selector" defaultValue="" onChange={handleSelect}>
            <option value="" selected disabled>Choose a Ghibli Film</option>
            {filmsToSelect}
        </select>
    );

};

export default FilmSelector;