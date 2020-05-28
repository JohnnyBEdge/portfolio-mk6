import React from 'react';
import '../comp-style/contact.css';
import Github from '../comp-style/imgs/icons/github.png';
import Email from '../comp-style/imgs/icons/email2.png';
import Linkedin from '../comp-style/imgs/icons/linkedin.png';

const Contact = () => {
    return (
        <div>
            <div id="contact_container">
                <p>Contact Me:</p>
                <ul id="contact_list">
                    <li id="email">jrmartin182@gmail.com</li>
                    {/* <li><img class="icon" src={Email} alt="Email icon." /></li> */}
                    <li>
                        <a href={"https://github.com/JohnnyBEdge"}>
                            <img class="icon" src={Github} alt="GitHub icon." />
                        </a>
                    </li>
                    <li>
                        <a href={"https://www.linkedin.com/in/johnxmartin/"}>
                            <img class="icon" src={Linkedin} alt="LinkedIn icon." />
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    )
};

export default Contact;