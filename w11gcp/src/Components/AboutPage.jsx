import React from 'react'
import { Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
import NavigationBar from "./NavigationBar";

const AboutPage = () => {
    let navigate = useNavigate();
    
    return (
        <>
        <NavigationBar/>
        <p/>
            <Container>
            <Row>
                <Col><h2>Who are you?</h2></Col>
                <Col><p>Hi, My name is Alex Chaffey.</p></Col>
                <Col><h2>Abit about you</h2></Col>
                <Col><p>Im a new developer and have alongside my team created this site</p></Col>
                <Col><h2>Twitter</h2></Col>
                <Col><p>@MrBingbong</p></Col>
                <Col><h2>Email address</h2></Col>
                <Col><p>MrBingBong@gmail.co.uk</p></Col>
                </Row>
                
                
                
                
                
                
                
                
            

            <Row>
                <Col><h2>Who are you?</h2></Col>
                <Col><p>Hello, My name is Jehad AbdelBaqi.</p></Col>
                <Col><h2>Abit about you</h2></Col>
                <Col><p>Im a new developer with experience in Python, and I have alongside my team created this site</p></Col>
                <Col><h2>Twitter</h2></Col>
                <Col><p>@SupremeAbdelBaqi</p></Col>
                <Col><h2>Email address</h2></Col>
                <Col><p>slabdelBaqi@gmail.co.uk</p></Col>
                </Row>

                
                
                
                
                
                
                
                
            

            <Row>
                <Col><h2>Who are you?</h2></Col>
                <Col><p>Hi, My name is Rowan Wittaker.</p></Col>
                <Col><h2>Abit about you</h2></Col>
                <Col><p>Im a new developer and have alongside my team created this site</p></Col>
                <Col><h2>Twitter</h2></Col>
                <Col><p>@Roleplayer</p></Col>
                <Col><h2>Email address</h2></Col>
                <Col><p>rpreaper@yahoo.co.uk</p></Col>
                </Row>


            <Row>
                <Col><h2>Who are you?</h2></Col>
                <Col><p>Hi, My name is Wojciech.</p></Col>
                <Col><h2>Abit about you</h2></Col>
                <Col><p>Im a new developer but have alot of experience with technology</p></Col>
                <Col><h2>Twitter</h2></Col>
                <Col><p>@Anonyouwish</p></Col>
                <Col><h2>Email address</h2></Col>
                <Col><p>Wojciechmate@hotmail.com</p></Col>
                </Row>
                
                
                
                
                
                
                
                
            

            <Row>
                <Col><h2>Who are you?</h2></Col>
                <Col><p>Hi, My name is Matt Grimsey.</p></Col>
                <Col><h2>Abit about you</h2></Col>
                <Col><p>Ive had experience in the past with frontend work years ago and have refreshed my skills which has allowed me to alongside my team create this site</p></Col>
                <Col><h2>Twitter</h2></Col>
                <Col><p>@MattyG</p></Col>
                <Col><h2>Email address</h2></Col>
                <Col><p>Mattg@gmail.co.uk</p></Col>
                </Row>
            </Container>

            <button onClick={() => {
                navigate("/ClassificationPage.jsx");
            }}
            >
                Contents Page
            </button>
        </>
    );
}

export default AboutPage;