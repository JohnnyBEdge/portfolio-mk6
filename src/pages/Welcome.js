import React from 'react';
import Nav from './Nav';
import '../comp-style/welcome.css';
import Fade from 'react-reveal/Fade';


const Welcome = () =>{
    return (
            <div id="welcome" className="section">
                <Fade duration={3000}>
                <Nav />
                <div id="sum_container">
                    <h1>Full-Stack Javascript Developer</h1>
                    <p id="summary">My name is John and I am a web developer based out of Salt Lake City, Utah. </p>
                </div>
                </Fade>
            </div>
    );

};

export default Welcome;
