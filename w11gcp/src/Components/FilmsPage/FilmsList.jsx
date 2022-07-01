const FilmsList = ({ props }) => {

    return (
        <div className="film" key={props._id}>
            <h3 className="film_title">{props.filmName}</h3>
            <p>{props.directorName}</p>
        </div>
    )
}


export default FilmsList;