import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Train from "../Resources/Train.JPG";
import CinemaMap from "../Resources/CinemaMap.JPG";
import CinemaFront from "../Resources/CinemaFront.png";


const GettingHerePage = () => {
    return (
        <>
            <Container className="GettingHereDiv">
                <Row xs="1">
                    <Col><h3>Getting here!</h3></Col>
                </Row>

                <Row>
                    <Col><h4>Transport</h4></Col>
                </Row>

                <Row row-cols="3">
                    <Col xs="3"><h5>By Train</h5>
                    <p>Not working, not in columns. Death to the West!</p></Col>
                    <img src={Train} alt="Closest Train Stations to Cinema" />
                    <Col xs="3"><h5>By Bus</h5>
                    <p>There will be pictures here, illustrating the way to our cinema. Strike down the Great Satan!</p></Col>
                    <Col xs="3"><h5>By Car</h5>
                    <p>Don't drive, kids. it's expensive, it's dangerous, and it's killing the planet.</p>
                    <p>Fly private instead.</p>
                    </Col>
                </Row>

                            <h4>Address</h4>
                            <p>51 Bartholemew Street West<br/>Exeter<br/>EX4 3AJ</p>
                    <Col fluid="xl"></Col>
                    <Row fluid="xl">
                    <Col className="CinemaLocation" fluid="xl">
                        <p>Below is a map of the nearby area, along with a picture of the frontage, so you know when you're here.</p>
                        <p>We doubt you'll need it, as the stream of happy moviegoers will probably tip you off!</p>
                    </Col>
                    </Row>
                    <Col>
                    <img src={CinemaMap} alt="Cinema Map of Bartholemew Street, Exeter" />
                    </Col>
                    <Col>
                    <img src={CinemaFront}alt="I don't care, I just want this programme to run" />
                    </Col>
   
            </Container>
        </>
    );
}

export default GettingHerePage;