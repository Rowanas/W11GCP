import React from 'react'
import { Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
import ClassificationPage from './ClassificationPage';

const AboutPage = () => {
    let navigate = useNavigate();
    
    return (
        <>
       
        <p/>
            <Container>
            <Col>
                <Row><h2>Who are you?</h2></Row>
                <Row><p>Hi, My name is Alex Chaffey.</p></Row>
                <Row><h2>Abit about you</h2></Row>
                <Row><p>Im a new developer and have alongside my team created this site</p></Row>
                <Row><h2>Twitter</h2></Row>
                <Row><p>@MrBingbong</p></Row>
                <Row><h2>Email address</h2></Row>
                <Row><p>MrBingBong@gmail.co.uk</p></Row>
                </Col>
                
                <Col>
                <Row><h2>Who are you?</h2></Row>
                <Row><p>Hello, My name is Jehad AbdelBaqi.</p></Row>
                <Row><h2>Abit about you</h2></Row>
                <Row><p>Im a new developer with experience in Python, and I have alongside my team created this site</p></Row>
                <Row><h2>Twitter</h2></Row>
                <Row><p>@SupremeAbdelBaqi</p></Row>
                <Row><h2>Email address</h2></Row>
                <Row><p>slabdelBaqi@gmail.co.uk</p></Row>
                </Col>

                <Col>
                <Row><h2>Who are you?</h2></Row>
                <Row><p>Hi, My name is Rowan Wittaker.</p></Row>
                <Row><h2>Abit about you</h2></Row>
                <Row><p>Im a new developer and have alongside my team created this site</p></Row>
                <Row><h2>Twitter</h2></Row>
                <Row><p>@Roleplayer</p></Row>
                <Row><h2>Email address</h2></Row>
                <Row><p>rpreaper@yahoo.co.uk</p></Row>
                </Col>

                <Col>
                <Row><h2>Who are you?</h2></Row>
                <Row><p>Hi, My name is Wojciech.</p></Row>
                <Row><h2>Abit about you</h2></Row>
                <Row><p>Im a new developer but have alot of experience with technology</p></Row>
                <Row><h2>Twitter</h2></Row>
                <Row><p>@Anonyouwish</p></Row>
                <Row><h2>Email address</h2></Row>
                <Row><p>Wojciechmate@hotmail.com</p></Row>
                </Col>
                
                <Col>
                <Row><h2>Who are you?</h2></Row>
                <Row><p>Hi, My name is Matt Grimsey.</p></Row>
                <Row><h2>Abit about you</h2></Row>
                <Row><p>Ive had experience in the past with frontend work years ago and have refreshed my skills which has allowed me to alongside my team create this site</p></Row>
                <Row><h2>Twitter</h2></Row>
                <Row><p>@MattyG</p></Row>
                <Row><h2>Email address</h2></Row>
                <Row><p>Mattg@gmail.co.uk</p></Row>
                </Col>
            </Container>

            <button onClick={() => {
                navigate("/ClassificationPage.jsx");
            }}
            >Contents Page
            </button>
        </>
    );
}

export default AboutPage;