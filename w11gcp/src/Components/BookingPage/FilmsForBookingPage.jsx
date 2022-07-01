import "./BookingPage.css";
import filmsListForBookings from "./filmies"

const FilmsForBooking = ({ film, onChange }) => {
    return (
        <div className="FilmBookings">
            <label htmlFor="film">Choose a film</label>
            <select
                id="film"
                value={filmsListForBookings.name}
                onChange={e => {
                    onChange(filmsListForBookings.find(film => film.name === e.target.value))
                }}
            >
                {filmsListForBookings.map(film => (
                    <option key={film.name} value={film.name}>
                        {film.name} (${film.price})
                    </option>
                ))}
            </select>
        </div>
    );
}

export default FilmsForBooking;