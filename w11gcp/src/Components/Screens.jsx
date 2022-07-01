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

            <div className="screen">
                <h1>Standard screen</h1>
                <p>Here we have our Standard screen, below is an image of the cinema inside and the seating layout.</p>
                </div>
                <img src={StandardImage} height= '300px' width='500px' alt="Standard Cinema"/>
                <img src={StandardSeating} height= '300px' width='500px'  alt="Standard Cinema seating" />

            <div className="screen">
                <h1>Deluxe Screen</h1>
                <p>Here we have our Deluxe screen, below is an image of the cinema inside and the seating layout.</p>
                </div>
                <img src={DeluxeImage} height= '300px' width='500px' alt="Deluxe Cinema" />
                <img src={DeluxeSeating} height= '300px' width='500px' alt="Deluxe Cinema seating" />


        </>
    );
}

export default Screens;