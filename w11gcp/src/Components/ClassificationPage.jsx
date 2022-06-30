import React from "react";
import { Container, Row, Col } from "reactstrap";

const ClassificationPage = () => {
    return (
        <>
        
        <p/>
        <Container>
            <Row>
                <Col>
                    <img src="http://www.screenonline.org.uk/files/784677.jpg" alt="All of the certifications" id="mainimg"/>
                </Col>
            </Row>

            <Row>
                <Col>
                <h2> What are the standard film classifications?</h2>
                </Col>
            </Row>

            <Row>
                <Col>
                <p>Classifications currently in use are Uc, U, PG, 12, 12A, 15, 18 and R18, but quite a few more have been featured on film posters throughout the last century.</p>
                </Col>
            </Row>

            <Row>
                <Col>
                <h2>
                    What are the rules and conditions relating to each classification?
                </h2>
                </Col>
            </Row>


            <Row>
            <Col xs="2"><strong>Rating</strong></Col>
                <Col xs="3"><strong>Years active</strong></Col>
                <Col xs="7"><strong>Meaning</strong></Col>
            </Row>
            <p/>
            <Row>
                <Col xs="2"><strong>U</strong></Col>
                <Col xs="3">1912-present</Col>
                <Col xs="7">This stood for 'Universal' and denoted that a film was suitable for everyone.</Col>
            </Row>
                <p/>

            <Row>
                <Col xs="2"><strong>A</strong></Col>
                <Col xs="3">1912-1982</Col>
                <Col xs="7">This stood for 'Adult', and denoted that the film might contain material unsuitable for children.  From 1923 to 1970 children were required to be accompanied by adults.  The A certificate was replaced by the PG certificate in 1982.</Col>
            </Row>
                <p/>

            <Row>
                <Col xs="2"><strong>H</strong></Col>
                <Col xs="3">1932-1951</Col>
                <Col xs="7">This stood for 'Horror', and was largely restricted to that genre.  It was advisory, but many local authorities used it as an excuse to ban children under sixteen.  It was replaced by the X certificate in 1951.</Col>
            </Row>
                <p/>

            <Row>
                <Col xs="2"><strong>X</strong></Col>
                <Col xs="3">1951-1982</Col>
                <Col xs="7">This was the first BBFC certificate that explicitly excluded people under a certain age limit, in this case sixteen.  The limit was raised to eighteen in 1970, and the X certificate was replaced by the 18 certificate in 1982.</Col>
            </Row>
                <p/>

            <Row>
                <Col xs="2"><strong>AA</strong></Col>
                <Col xs="3">1970-1982</Col>
                <Col xs="7">This excluded people under the age of fourteen.  It was replaced by the 15 certificate in 1982.</Col>
            </Row>
                <p/>

            <Row>
                <Col xs="2"><strong>PG</strong></Col>
                <Col xs="3">1982-Present</Col>
                <Col xs="7">Replacing the old A certificate, this stood for 'Parental Guidance'.  Although anyone could be admitted, PG certificate films contained an implicit warning that the film might contain material unsuitable for children.</Col>
            </Row>
                <p/>

            <Row>
                <Col xs="2"><strong>15</strong></Col>
                <Col xs="3">1982-Present</Col>
                <Col xs="7">This replaced the old AA certificate, raising the age limit to 15 in the process.</Col>
            </Row>
                <p/>

            <Row>
                <Col xs="2"><strong>18</strong></Col>
                <Col xs="3">1982-Present</Col>
                <Col xs="7">This replaced the old X certificate, barring people under eighteen.</Col>
            </Row>
                <p/>

            <Row>
                <Col xs="2"><strong>R18</strong></Col>
                <Col xs="3">1982-Present</Col>
                <Col xs="7">This classification was exclusively intended for videos that could only be sold in licensed sex shops.</Col>
            </Row>
                <p/>

            <Row>
                <Col xs="2"><strong>UC</strong></Col>
                <Col xs="3">1985-Present</Col>
                <Col xs="7">This denotes video releases deemed particularly suitable for pre-school children.</Col>
            </Row>
                <p/>

            <Row>
                <Col xs="2"><strong>12</strong></Col>
                <Col xs="3">1989-Present</Col>
                <Col xs="7">Introduced for cinema films in 1989 and video releases in 1994, this covers films that, while containing material deemed unsuitable for children, were nonetheless considered appropriate for 12-year-olds and upwards.</Col>
            </Row>
                <p/>

            <Row>
                <Col xs="2"><strong>12A</strong></Col>
                <Col xs="3">2002-Present</Col>
                <Col xs="7">Introduced for cinema films, this replaced the theatrical 12 certificate and permitted children under twelve to see the films provided they were accompanied by a responsible adult.</Col>
            </Row>
                <p/>
                </Container>
            <Container>
                <Row xs="true">
                    <Col xs="true">
                    <h2>External Links</h2>
                    </Col>
                <Row/>
                    <Col>
                    <a href="http://www.screenonline.org.uk/film/id/592611/index.html#:~:text=Classifications%20currently%20in%20use%20are,posters%20throughout%20the%20last%20century." target="_blank" rel="noreferrer" > BFFC Classifications </a>
                    </Col>
                    <Col>
                    <a href="https://en.wikipedia.org/wiki/British_Board_of_Film_Classificationttp://www.screenonline.org.uk/film/id/592611/index.html#:~:text=Classifications%20currently%20in%20use%20are,posters%20throughout%20the%20last%20century." target="_blank" rel="noreferrer">Wikipedia Board of film Classifications </a>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ClassificationPage;