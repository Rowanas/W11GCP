import FilmItem from "./FilmItem";
import React from "react";
import { useState } from "react";
import SearchBar from "./SearchBar";

function FilmList1() {

const [films, setfilms] = useState([


    {filmName: "Avengers"},
    {filmName: "Toystory"},
    {filmName: "Joker"},
    {filmName: "Funny"}

]);

const [filteredFilms, setFilteredFilms] = useState(films);

const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();

    setFilteredFilms(films.filter(film => film.filmName.search(value) !== -1));
}

return (
    <div>
        <SearchBar handleSearch={handleSearch} />
        <ul>
            {filteredFilms.map(film => <FilmItem key={film.filmName} FilmName={film.filmName} />)}
        </ul>
    </div>
);
}

export default FilmList1;