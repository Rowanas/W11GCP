// import { useState } from "react";
import FilmGetter from "./FilmGetter";

const FilmsPage = () => {

    return ( 
        <div>
            {/* <ul>
                {films.map(film => <FilmsList key={film.name} name={film.name}/>)}
            </ul> */}
            <FilmGetter/>
            {/* <h1>Hello</h1> */}
        </div>
     );
}
 
export default FilmsPage;