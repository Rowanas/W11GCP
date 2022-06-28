import React from 'react'
import { Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
    let navigate = useNavigate();
    return ( 
        <>
       
        <p/>
            <Container>

            <Col>
            <Row><h1>Contact form</h1></Row>
                
            <Row><input type="text" placeholder="Your Name" /></Row>
            <Row><input type="email" placeholder="Your email address" /></Row>
            <Row><textarea placeholder="Your message"></textarea></Row>
            <Row><button>Send Message</button></Row>
            <Row><span>Thank you for your message, we will be in touch in no time!</span>
        </Row>
                <Row><h2>Postal address: QA Cinemas, Bartholemew Street, Exeter, EX4 1RD</h2></Row>
              
                </Col>
                </Container>
               
        </>
     );
}
 
export default ContactPage;