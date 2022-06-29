import React from 'react'
import { Container, Row, Col } from "reactstrap";
<<<<<<< HEAD

const ContactPage = () => {

    return (
=======
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { submit} from 'react';


const ContactPage = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [emailSent, setEmailSent] = useState(false);
    let navigate = useNavigate();
    return ( 
>>>>>>> 4203de95d600b1362c6a84946b278cc69a80a918
        <>

            <p />
            <Container>

<<<<<<< HEAD
                <Col>
                    <Row><h1><b>Contact form</b></h1></Row>

                    <Row><input type="text" placeholder="Your Name" /></Row>
                    <Row><input type="email" placeholder="Your email address" /></Row>
                    <Row><textarea placeholder="Your message"></textarea></Row>
                    <Row><button><h4>Send Message</h4></button></Row>
                    <Row><span><h2>Thank you for your message, we will be in touch in no time!</h2></span>
                    </Row>
                    <Row><h2>Postal address: QA Cinemas, Bartholemew Street, Exeter, EX4 1RD</h2></Row>

=======
            <Col>
            <Row><h1><b>Contact form</b></h1></Row>
                
            <Row><input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} /></Row>
            <Row><input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} /></Row>
            <Row><textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea></Row>
            <Row><button onClick={submit}>Send Message</button></Row>
            <Row> <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span></Row>
                <Row><h2>Postal address: QA Cinemas, Bartholemew Street, Exeter, EX4 1RD</h2></Row>
                <Row><h2>Phone number: 01392 444 4444</h2></Row>
              
>>>>>>> 4203de95d600b1362c6a84946b278cc69a80a918
                </Col>
            </Container>

        </>
    );
}
<<<<<<< HEAD

export default ContactPage;
=======
 
export default ContactPage;
>>>>>>> 4203de95d600b1362c6a84946b278cc69a80a918
