import React from 'react'
import { Row, Col } from "reactstrap";
import CinemaSplash from "../Resources/CinemaSplash.jpg";


const HomePage = () => {
    
    return ( 
        <Col>
            <Row><h1>HomePage</h1></Row>
            <Row><img src={CinemaSplash} alt="display image" /></Row>
            </Col>

        
     );
}
 
export default HomePage;