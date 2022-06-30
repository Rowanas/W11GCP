import React from 'react'
import { Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
    let navigate = useNavigate();

    return (
        <>

            <p />
            <Container>                
            <Row>
                <Col><h2>Who are you?</h2></Col>
                <Col><h2>Who are you?</h2></Col>
                <Col><h2>Who are you?</h2></Col>
                <Col><h2>Who are you?</h2></Col>
                <Col><h2>Who are you?</h2></Col>
                
                </Row>
                
                
                
                <Row>
                <Col><p>Hello, My name is Alex Chaffey.</p></Col>
                <Col><p>Hello, My name is Jehad AbdelBaqi.</p></Col>
                <Col><p>Hello, My name is Rowan Whittaker</p></Col>
                <Col><p>Hello, My name is Woijech</p></Col>
                <Col><p>Hello, My name is Matt Grimsey</p></Col>
                </Row>
                

                
                <Row>
                <Col><h2>Abit about you</h2></Col>
                <Col><h2>Abit about you</h2></Col>
                <Col><h2>Abit about you</h2></Col>
                <Col><h2>Abit about you</h2></Col>
                <Col><h2>Abit about you</h2></Col>
                </Row>
                

                
                <Row>
                <Col><p>Im a new developer and have alongside my team created this site</p></Col>
                <Col><p>Im a new developer with experience in Python, and I have alongside my team created this site</p></Col>
                <Col><p>Im a new developer and have alongside my team created this site</p></Col>
                <Col><p>Im a new developer but have alot of experience with technology</p></Col>
                <Col><p>Ive had experience in the past with frontend work years ago and have refreshed my skills which has allowed me to alongside my team create this site</p></Col>
                </Row>
                
                
                
                <Row>
                <Col><h2>Twitter</h2></Col>
                <Col><h2>Twitter</h2></Col>
                <Col><h2>Twitter</h2></Col>
                <Col><h2>Twitter</h2></Col>
                <Col><h2>Twitter</h2></Col>
                </Row>

                <Row>
                <Col><p>@MrBingbong</p></Col>
                <Col><p>@SupremeAbdelBaqi</p></Col>
                <Col><p>@Roleplayer</p></Col>
                <Col><p>@Anonyouwish</p></Col>
                <Col><p>@MattyG</p></Col>
                </Row>

                <Row>
                <Col><h2>Email Address</h2></Col>
                <Col><h2>Email Address</h2></Col>
                <Col><h2>Email Address</h2></Col>
                <Col><h2>Email Address</h2></Col>
                <Col><h2>Email Address</h2></Col>
                </Row>
                <Row>
                <Col><p>MrBingBong@gmail.co.uk</p></Col>
                <Col><p>slabdelBaqi@gmail.co.uk</p></Col>
                <Col><p>rpreaper@yahoo.co.uk</p></Col>
                <Col><p>Wojciechmate@hotmail.com</p></Col>
                <Col><p>Mattg@gmail.co.uk</p></Col>
                </Row>


                <Col>
                <Row><h2>We are based at: QA Cinemas Web Department, Bartholemew Street, Exeter, EX4 1RD</h2></Row>
                <Row><p></p></Row></Col>
            </Container>



            <button onClick={() => {
                navigate("/ContactPage");
            }}
            >Contacts Page
            </button>
        </>
    );
}

export default AboutPage;