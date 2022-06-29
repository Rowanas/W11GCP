import React from 'react'
import { Container, Row, Col } from "reactstrap";

const ContactPage = () => {

    return (
        <>

            <p />
            <Container>

                <Col>
                    <Row><h1><b>Contact form</b></h1></Row>

                    <Row><input type="text" placeholder="Your Name" /></Row>
                    <Row><input type="email" placeholder="Your email address" /></Row>
                    <Row><textarea placeholder="Your message"></textarea></Row>
                    <Row><button><h4>Send Message</h4></button></Row>
                    <Row><span><h2>Thank you for your message, we will be in touch in no time!</h2></span>
                    </Row>
                    <Row><h2>Postal address: QA Cinemas, Bartholemew Street, Exeter, EX4 1RD</h2></Row>

                </Col>
            </Container>

        </>
    );
}

export default ContactPage;
