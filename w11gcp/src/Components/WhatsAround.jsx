import React from 'react'
import { Container, Row, Col } from "reactstrap";
import EattheBird from "../Resources/EattheBird.jpg";
import Firezza from "../Resources/Firezza.jpg";
import Angel from "../Resources/Angel.jpg";
import TallyHo from "../Resources/TallyHo.jpg";

const WhatsAround = () => {
    return (
        <>


            <Container>

                <Col>
                    <Row> <h1> Where to go before and after you come to us!</h1></Row>
                    <Row><p>We have some beautiful bars and resturants you can visit before and after your chosen movie with us, please see each resturant or bar below for more infomation </p></Row>
                </Col>

                <Col>
                    <Row><h1>Resturant</h1></Row>
                    <Row><h2>Eat the Bird</h2></Row>
                    <Row><img src={EattheBird} alt="Eat the Bird" /></Row>
                    <Row><p>Here at Eat the Bird we are known as the best chicken and burger place in all of Exeter. Head on over here for some lunch or dinner before or after your movie.</p></Row>
                    <Row><h2>Current offers</h2></Row>
                    <Row><p>Im sorry, we dont currently have any offers in conjunction with the Cinema right now, please check back another time.</p></Row>
                    <Row><p>We are currently accepting Blue light cards for 15% all meals eaten in.</p></Row>
                    <Row><h2>Contact Details</h2></Row>
                    <Row><h2>EXETER</h2></Row>
                    <Row><p>183 Sidwell Street, EX4 6RD</p></Row>
                    <Row><p><strong>hours</strong><br />Sunday – Thursday<br />12pm – 9pm</p></Row>
                    <Row><p>Friday + Saturday<br />12pm – 10pm</p></Row>
                    <Row><p><strong>Phone:</strong><br />01392 258737</p></Row>
                </Col>


                <Col>
                    <Row><h1>Resturant</h1></Row>
                    <Row><h2>Firezza</h2></Row>
                    <Row><img src={Firezza} alt="Pizza Resturant" /></Row>
                    <Row><p>Firezza is just the fuel you need before or after your movie experience. Find out how to get to us and we look forward to seeing you soon.</p></Row>
                    <Row><h2>Current offers</h2></Row>
                    <Row><p>For PRIDE month we are offering a 3% discount with every Pizza inch you order (Max 14") </p></Row>
                    <Row><h2>Contact Details</h2></Row>
                    <Row><h2>EXETER</h2></Row>
                    <Row><p>47, 48 Sidwell Street, EX4 6NS</p></Row>
                    <Row><p><strong>hours</strong><br />Tuesday – Saturday<br />11am – 11pm</p></Row>
                    <Row><p>Sunday<br />12pm – 10pm</p></Row>
                    <Row><p>Monday<br />11pm – 10pm</p></Row>
                    <Row><p><strong>phone:</strong><br />01392 715323</p></Row>
                </Col>
                <Col>
                    <Row><h2>Bar</h2></Row>
                    <Row><p>The Angel</p></Row>
                    <Row><img src={Angel} alt="The Angel Bar" /></Row>
                    <Row><p>The Angel is a beautiful little pub here in Exeter, feel free to come on down and have a bevvy before or after your film. (18+ only) </p></Row>
                    <Row><h2>Current offers</h2></Row>
                    <Row><p>We do not offer any Discounts, but we have a Happy Hour every day from 2pm-4pm</p></Row>
                    <Row><h2>Contact Details</h2></Row>
                    <Row><h2>EXETER</h2></Row>
                    <Row><p>1-3 Matins Lane, EX1 1EY</p></Row>
                    <Row><p><strong>hours</strong><br />Sunday – Tuesday + Thursday<br />11am – 11pm</p></Row>
                    <Row><p>Friday + Saturday+ Wednesday<br />11pm – 12am</p></Row>
                    <Row><p><strong>phone</strong><br />01392 272040</p></Row>
                </Col>
                <Col>
                    <Row><h2>Bar</h2></Row>
                    <Row><h3>The Tally Ho!</h3></Row>
                    <Row><img src={TallyHo} alt="Tally Ho Pub" /></Row>
                    <Row><p> Hello there, going for a movie eh? why not take a saunter down here and have some tasty drinks and nibbles, Tally Ho then.</p></Row>
                    <Row><h2>Current offers</h2></Row>
                    <Row><p> If you come on down and it's your birthday you can claim 1 free drink for yourself up to the value of £7.99 (Must have ID) </p></Row>
                    <Row><h2>Contact Details</h2></Row>
                    <Row><h2>TOTNES</h2></Row>
                    <Row><p>Littlehempston, Totnes TQ9 6LY</p></Row>
                    <Row><p><strong>hours</strong><br />Tuesday – Sunday<br />11am – 3pm + 5pm - 11pm</p></Row>
                    <Row><p>Sunday<br />Closed</p></Row>
                    <Row><p><strong>phone</strong><br />01803 862316</p></Row>
                </Col>
            </Container>

        </>
    );
}

export default WhatsAround;
