import priceList from "./PriceList";

const Pricing = ({ setAdult, setChild, setConcession }) => {

    return (
        <div>
            <span className="react-numeric-input">
                <label htmlFor="adultSeats">Adult: ${priceList[0].price}</label>
                <input id="adultSeats" className="form-control" type="number" defaultValue={0} name="adultSeats"
                    onChange={(event) => setAdult(event.target.value)}
                />
            </span>
            <span className="react-numeric-input">
                <label htmlFor="childSeats">Child: ${priceList[1].price}</label>
                <input id="childSeats" className="form-control" type="number" defaultValue={0} name="childSeats"
                    onChange={(event) => setChild(event.target.value)}
                />
            </span>
            <span className="react-numeric-input">
                <label htmlFor="concessionSeats">Concession: ${priceList[2].price}</label>
                <input id="concessionSeats" className="form-control" type="number" defaultValue={0} name="consessionSeats"
                    onChange={(event) => setConcession(event.target.value)}
                // onInput={(event) => setConcession(event.target.value)}
                />
            </span>
        </div>
    );
}

export default Pricing;