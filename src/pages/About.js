import React from 'react';
import Profile from '../comp-style/imgs/profile-pic.png';
import '../comp-style/about.css';
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <div>
            <div id="profile_container">
                <div id="profile_img_container">
                    <img id="proPic" src={Profile} alt="Profile image of John." />
                    <h2 id="author">John Martin</h2>
                    <p id="profile_summary">Hi, my name is John and I am a JavaScript Web Developer based out of Salt Lake City. From racing in triathlons, teaching English in Asia and working in the fast paced world of fulfillment, my diverse background has built a quiver of skillsets that make me a well-rounded developer. Here you will find some of my projects along with my contact information should you be interested in connecting!</p>

                </div>
            </div>

            <div id="tech_container">
                <h4>My Tech Stack:</h4>
                <ul>
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>ReactJS</li>
                    <li>NodeJS</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>AWS in progress...</li>
                </ul>
                <p id="resume"><Link to="/resume">View my resume.</Link></p>
                <div id="badge">
                    <a href="https://www.codewars.com/users/JohnnyBEdge">
                        <img id="codewars" src="https://www.codewars.com/users/JohnnyBEdge/badges/large" alt="CodeWars.com badge."/>
                    </a>
                </div>
                
            </div>
        </div>
    )
}

export default About;