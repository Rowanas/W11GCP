import React from "react";

function SearchBar({ handleSearch }) {
    return (

        <div>
            <button link to = "/FilmsList.jsx" onClick = {handleSearch}>Search</button>
            <input placeholder = "Search Term" type="text" onChange={handleSearch} />

        </div>
    )

}

export default SearchBar;