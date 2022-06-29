import React from 'react'
import { Row, Col } from "reactstrap";
import CinemaSplash from "../Resources/CinemaSplash.jpg";


const HomePage = () => {

    return (
        <Col>
            <Row><h1>HomePage</h1></Row>
            <Row><img src={CinemaSplash} alt="Man in the cinema room" /></Row>
        </Col>


    );
}

export default HomePage;