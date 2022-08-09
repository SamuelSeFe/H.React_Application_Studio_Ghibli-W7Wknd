import React from "react";

const DirectorSelect = ({directors, onDirectorSelect}) => {

    const handleClick = (event) => {
        onDirectorSelect(event.target.value);
    };

    const directorsToSelect = [...directors]
    const directorsNodes = directorsToSelect.map((director) => {
        return ( 
            <div className="directors">
                <label htmlFor={director}>{director}</label>
                <input type="radio" value={director} key={director} id={director} name="director-select" onClick={handleClick}></input>
            </div>
            )
        }
    );

    return (
        <>
            <div className="directors">
                <label htmlFor="all">All</label>
                <input type="radio" id="all" value="" name="director-select" onClick={handleClick} />
            </div>
            {directorsNodes}
        </>
    );

};

export default DirectorSelect;