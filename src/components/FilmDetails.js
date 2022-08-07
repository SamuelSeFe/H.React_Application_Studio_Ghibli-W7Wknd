import React from 'react'

const FilmDetails = ({selectedFilm}) => {

  return (
    <>
        <ul>
            <li key={selectedFilm.id} className="single-film-details">
                <h3>{selectedFilm.title}</h3>
                <img className="film-image" src={selectedFilm.movie_banner} alt="Film Banner" />
                <br></br>
                <p>Original title: {selectedFilm.original_title_romanised}</p>
                <p>Released date: {selectedFilm.release_date}</p>
                <p>Running time: {selectedFilm.running_time} mins</p>
                <p>Rotten Tomatoes Score: {selectedFilm.rt_score}</p>
                <br></br>
                <p>Description: {selectedFilm.description}</p>

                <p>Location: {selectedFilm.locations}</p>
            </li>
        </ul>
    </>
  )
};

export default FilmDetails;