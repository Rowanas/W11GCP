import React from 'react'
import { Container, Row, Col } from "reactstrap";
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
        <>

            <p />
            <Container>

            <Col>
            <Row><h1><b>Contact form</b></h1></Row>
                
            <Row><input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} /></Row>
            <Row><input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} /></Row>
            <Row><textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea></Row>
            <Row><button onClick={submit}>Send Message</button></Row>
            <Row> <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span></Row>
                <Row><h2>Postal address: QA Cinemas, Bartholemew Street, Exeter, EX4 1RD</h2></Row>
                <Row><h2>Phone number: 01392 444 4444</h2></Row>
              
                </Col>
            </Container>

        </>
    );
}

export default ContactPage;
