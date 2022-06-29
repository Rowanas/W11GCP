import React, { useState } from 'react'
import "./BookingPage.css";
import FilmsForBooking from "./FilmsForBookingPage";
import filmsListForBookings from './filmies';
import Showcase from "./Showcase";
import Cinema from "./Cinema";
import Pricing from './Pricing';
import priceList from './PriceList';


const BookingsPage = () => {
    const [selectedFilm, setSelectedFilm] = useState(filmsListForBookings[0]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [selectedAdultTotal, setSelectedAdultTotal] = useState(0);
    const [selectedChildTotal, setSelectedChildTotal] = useState(0);
    const [selectedConcessionTotal, setSelectedConcessionTotal] = useState(0);
    
    return ( 
        <div className="App">
            <FilmsForBooking
                film={selectedFilm}
                onChange={film => {
                    setSelectedSeats([])
                    setSelectedFilm(film)
                }}
                />
            <Showcase/>
            <Cinema
                film={selectedFilm}
                selectedSeats={selectedSeats}
                onSelectedSeatsChange={selectedSeats => setSelectedSeats(selectedSeats)}
                />
            <Pricing setAdult={setSelectedAdultTotal} setChild={setSelectedChildTotal} setConcession={setSelectedConcessionTotal}/>
            <p className="info">
                You have selected <span className="count">{selectedSeats.length}</span>{' '}
                seats for the price of{' '}
                <span className="total">
                    {/* Rowan couldn't fiogure out how to make the below prettier - so we settled with this... sigh */}
                {selectedAdultTotal * priceList[0].price + selectedChildTotal * priceList[1].price + selectedConcessionTotal * priceList[2].price}$
                </span>
            </p>
        </div>
     );
}
 
export default BookingsPage;