import React, {useState, useEffect} from "react";
import FilmList from "../components/FilmList";
import FilmSelector from "../components/FilmSelector";
import FilmDetails from "../components/FilmDetails"
import DirectorSelect from "../components/DirectorSelect";
import '../App.css';


const GhibliContainer = () => {
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [director, setDirector] = useState('');
  
  useEffect(() => {
    getFilms();
  }, []);


  const getFilms = function() {
    fetch("https://ghibliapi.herokuapp.com/films")
    .then(res => res.json())
    .then(films => setFilms(films))
  };


  const onFilmSelected = function(film){
    setSelectedFilm(film);
  };

  const onDirectorSelect = (director) => {
    setDirector(director);
    onFilmSelected("");
  };

  const directors = new Set(films.map((film) => film.director));

  let filmsByDirector = films
  if (director){
    filmsByDirector = films.filter((film) => film.director === director)
  };

  
  return (
    <>
        <div className="main-container">
            <DirectorSelect directors={directors} onDirectorSelect={onDirectorSelect} />
            <FilmSelector films={filmsByDirector} onFilmSelected={onFilmSelected} />
            {selectedFilm ? <FilmDetails selectedFilm={selectedFilm} /> : null}
        </div>
    </>
    );

};

export default GhibliContainer;