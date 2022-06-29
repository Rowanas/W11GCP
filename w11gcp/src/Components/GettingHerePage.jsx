import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Train from "../Resources/Train.JPG";
import CinemaMap from "../Resources/CinemaMap.JPG";
import CinemaFront from "../Resources/CinemaFront.png";
import Bus from "../Resources/Bus.JPG";
import Car from "../Resources/Carpark.JPG";

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
                    <Col xs="3">
                    <h5>By Train</h5>
                    <img src={Train} alt="Closest Train Stations to Cinema"  width={200} height={200}/>
                    </Col>

                    <Col xs="3"><h5>By Bus</h5>
                    <img src={Bus} alt="Closest Bus Station to Cinema"  width={200} height={200}/>
                    </Col>
                    
                    <Col xs="3"><h5>By Car</h5>
                    <img src={Car} alt="Closest Carparks to Cinema"  width={200} height={200}/>
                    </Col>
                </Row>

                <Row row-cols="3">
                    <Col xs="3">
                    By train, hop off at Exeter St David's, and just walk across the big blue bridges and up the hill.<br/> When you reach Bartholemew Street West, turn left onto it, and our cinema is on your right!
                    </Col>

                    <Col xs="3">
                    By bus, it's even easier! The Exe Bridges busstop is right next to Bartholemew Street West, so a few seconds up the hill, onto BSW and then to our Cinema!<br/>The two closest town stops are almost as simple,
                    and much easier on the legs. Just stroll down the hill towards the piled up traffic, turn right onto BSW, and you're here!
                    </Col>

                    <Col xs="3">
                    By Car, you'll need to find a car park. There are three nearby, and the directions to get to us from each of them are very simple.<br/>For the Market Street and Smythen Street car parks,
                    you're rigtht alongside the high street. Follow the high street down the hill towards the blue bridges, turning right when you see Bartholomew Street West.<br/> West Street car park is even easier than that!
                    Just walk up the little hill (not the higgledypiggledy steps) across the crossroad, and we're right there!
                    </Col>
                </Row>




                <Row>
                    <Col>   <p/>
                            <h4>Address</h4>
                            <br/>51 Bartholemew Street West
                            <br/>Exeter
                            <br/>EX4 3AJ
    
                    </Col>
                </Row>
                
                <Row row-cols="2">
                    <Col className="CinemaLocation">
                        <p/>Below is a map of the nearby area, along with a picture of the frontage, so you know when you're here.
                        <p/>We doubt you'll need it, as the stream of happy moviegoers will probably tip you off!
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <img src={CinemaMap} alt="Cinema Map of Bartholemew Street, Exeter" width={200} height={200}/>
                    </Col>

                    <Col>
                    <img src={CinemaFront}alt="I don't care, I just want this programme to run" width={400} height={200}/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default GettingHerePage;