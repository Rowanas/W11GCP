import React, { useState } from 'react'
import "./BookingPage.css";
import FilmsForBooking from "./FilmsForBookingPage";
import filmsListForBookings from './filmies';
import Showcase from "./Showcase";
import Cinema from "./Cinema";
import Pricing from './Pricing';
import priceList from './PriceList';

// const screens = [normalScreen, deluxeScreen];

const TestBookingsPage = () => {
    const [selectedPrice, setSelectedPrice] = useState(priceList[0]);
    const [selectedFilm, setSelectedFilm] = useState(filmsListForBookings[0]);
    const [selectedSeats, setSelectedSeats] = useState([]);


    return (
        <div className="App">
            {/* <Pricing
                price={selectedPrice}
                onChange={price => {
                    setSelectedSeats([])
                    setSelectedPrice(price)
                }}
                />
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
            <p className="info">
                You have selected <span className="count">{selectedSeats.length}</span>{' '}
                seats for the price of{' '}
                <span className="total">
                {selectedSeats.length * selectedFilm.price}$
                </span>
            </p> */}

        </div>
    );
}

export default TestBookingsPage;