import { useEffect, useState } from "react";
import axios from "axios";
import FilmsList from "./FilmsList";

const FilmGetter = () => {
    const [films, setFilms] = useState([]);
    const URL = "http://localhost:3000/film";

    useEffect(() => {
        getAllFilms();
    }, []);

    const getAllFilms = () => {
        axios.get(`${URL}/getAll`)
        .then((response) => {
            const allFilms = response.data
            setFilms(allFilms);
            console.log(allFilms);
        })
        .catch(error => console.error(`Error: ${error}`));
    }

    return ( 
        <>
            {films.map(film =>
                <FilmsList props={film}/>)}
        </>
    );
}
 
export default FilmGetter;