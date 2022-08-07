import React from "react";
import FilmDetails from "./FilmDetails";


const FilmList = ({films}) => {


    const filmsItems = films.map((film, index) => {
        return <FilmDetails film={film} key={index} />
    })

  return (
    <div>
        <ol>
            {filmsItems}
        </ol>
    </div>

)};

export default FilmList;