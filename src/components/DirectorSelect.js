import React from "react";

const DirectorSelect = ({directors, onDirectorSelect}) => {

    const handleClick = (event) => {
        onDirectorSelect(event.target.value)
    };

    const directorsToSelect = [...directors]
    const directorsNodes = directorsToSelect.map((director, i) => <><label htmlFor={director}>{director}</label><input type="radio" value={director} key={i} id={director} name="director-select" onClick={handleClick} /></>)

    return (
        <>
            <label htmlFor="all">All</label>
            <input type="radio" id="all" value="" name="director-select" onClick={handleClick} />
            {directorsNodes}
        </>
    );

};

export default DirectorSelect;