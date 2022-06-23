import React from 'react'
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
    let navigate = useNavigate();
    return (
        <>
            <div className="Alex">
                <h2>Who are you?</h2>
                <p>Hi, My name is Alex Chaffey.</p>
                <h2>Abit about you</h2>
                <p>Im a new developer and have alongside my team created this site</p>
                <h2>Twitter</h2>
                <p>@MrBingbong</p>
                <h2>Email address</h2>
                <p>MrBingBong@gmail.co.uk</p>
            </div>

            <div className="Jehad">
                <h2>Who are you?</h2>
                <p>Hello, My name is Jehad AbdelBaqi.</p>
                <h2>Abit about you</h2>
                <p>Im a new developer with experience in Python, and I have alongside my team created this site</p>
                <h2>Twitter</h2>
                <p>@SupremeAbdelBaqi</p>
                <h2>Email address</h2>
                <p>slabdelBaqi@gmail.co.uk</p>
            </div>

            <div className="Rowan">
                <h2>Who are you?</h2>
                <p>Hi, My name is Rowan Wittaker.</p>
                <h2>Abit about you</h2>
                <p>Im a new developer and have alongside my team created this site</p>
                <h2>Twitter</h2>
                <p>@Roleplayer</p>
                <h2>Email address</h2>
                <p>rpreaper@yahoo.co.uk</p>
            </div>

            <div className="Wojciech">
                <h2>Who are you?</h2>
                <p>Hi, My name is Wojciech.</p>
                <h2>Abit about you</h2>
                <p>Im a new developer but have alot of experience with technology</p>
                <h2>Twitter</h2>
                <p>@Anonyouwish</p>
                <h2>Email address</h2>
                <p>Wojciechmate@hotmail.com</p>
            </div>

            <div className="Matt">
                <h2>Who are you?</h2>
                <p>Hi, My name is Matt Grimsey.</p>
                <h2>Abit about you</h2>
                <p>Ive had experience in the past with frontend work years ago and have refreshed my skills which has allowed me to alongside my team create this site</p>
                <h2>Twitter</h2>
                <p>@MattyG</p>
                <h2>Email address</h2>
                <p>Mattg@gmail.co.uk</p>
            </div>

            <button onClick={() => {
                navigate("/ClassificationPage");
            }}
            >
                Contents Page
            </button>
        </>
    );
}

export default AboutPage;