import React from 'react';
import DeluxeImage from "../Resources/DeluxeImage.jpg";
import DeluxeSeating from "../Resources/DeluxeSeating.jpeg";
import StandardImage from "../Resources/StandardImage.jpg";
import StandardSeating from "../Resources/StandardSeating.jpg";

const Screens = () => {
    return (
        <>
            <div className="screen">
                <h1> Our Screens</h1>
            </div>

            <div className="StandardScreen">
                <h1>Standard screen</h1>
                <p>Here we have our Standard screen, below is an image of the cinema inside and the seating layout.</p>
                <img src={StandardImage} alt="Standard Cinema" />
                <img src={StandardSeating} alt="Standard Cinema seating" />
            </div>

            <div className="Deluxe">
                <h1>Deluxe Screen</h1>
                <p>Here we have our Deluxe screen, below is an image of the cinema inside and the seating layout.</p>
                <img src={DeluxeImage} alt="Dueluxe Cinema" />
                <img src={DeluxeSeating} alt="Dueluxe Cinema seating" />

            </div>
        </>
    );
}

export default Screens;