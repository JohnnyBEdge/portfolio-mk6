import React from 'react';
import '../comp-style/projects.css';
import LearnCenter from '../comp-style/imgs/learn-center.png';
import Wedding from '../comp-style/imgs/wedding.png';
import Events from '../comp-style/imgs/events.png';
import ShopInven from '../comp-style/imgs/shop-inven.png'

const Projects = () => {
    return (

        <>
            <div id="projects_container" className="section">
<div className="seperator"></div> 
                <h2>Projects</h2>
<div className="seperator"></div> 

<div id="project_2" className="project">
                    <div className="proj proj-info">
                        <p className="proj-title">Event Scheduler</p>
                        <p className="proj-desc">An event tracker to help remind you what's on your schedule. Simple, easy to use, easy to navigate, designed for mobile-use.</p>
                        <div className="tech-list">
                            <p className="tech-title">Tech</p>
                                <ul>
                                    <li>Javascript</li>
                                    <li>React</li>
                                    <li>Express</li>
                                    <li>MongoDB</li>
                                </ul>
                        </div>
                        <button className="view-btn"><a href={"https://events-scheduler.herokuapp.com/"}>View Project</a></button>
                    </div>
                    <div className="proj proj-img">
                        <div className="img-frame">
                            <img src={Events} alt="Project screenshot"/>
                        </div>
                    </div>
                </div>

<div className="seperator"></div>

                <div id="project_1" className="project">
                    <div className="proj proj-img">
                        <div className="img-frame">
                            <img src={LearnCenter} alt="Project screenshot"/>
                        </div>
                    </div>
                    <div className="proj proj-info">
                        <p className="proj-title">Learning Center</p>
                        <p className="proj-desc">A personal collection of learning material including flashcards, a resource catalog and a place to create original content.</p>
                        <div className="tech-list">
                        <p className="tech-title">Tech</p>
                            <ul>
                                <li>Javascript</li>
                                <li>React</li>
                                <li>Express</li>
                                <li>MongoDB</li>
                                <li>Reactstrap</li>
                            </ul>
                        </div>
                        <button className="view-btn"><a href={"https://learning-center.herokuapp.com/"}>View Project</a></button>

                    </div>
                </div>
                
<div className="seperator"></div> 
                <div id="project_4" className="project">
                    <div className="proj proj-info">
                        <p className="proj-title">Shop Inventory</p>
                        <p className="proj-desc">A pseudo members only shop. Utilizes local storage, auth tokens and account creation with admin access and privileges.</p>
                        <div className="tech-list">
                            <p className="tech-title">Tech</p>
                                <ul>
                                    <li>Javascript</li>
                                    <li>React</li>
                                    <li>Express</li>
                                    <li>MongoDB</li>
                                </ul>
                        </div>
                        <button className="view-btn"><a href={"https://shop-ui-v2.netlify.app/#/"}>View Project</a></button>
                    </div>
                    <div className="proj proj-img">
                        <div className="img-frame">
                            <img src={ShopInven} alt="Project screenshot"/>
                        </div>
                    </div>
                </div>                

<div className="seperator"></div>
                <div id="project_3" className="project">
                    <div className="proj proj-img">
                        <div className="img-frame">
                            <img src={Wedding} alt="Project screenshot"/>
                        </div>
                    </div>
                    <div className="proj proj-info">
                        <p className="proj-title">Wedding Website</p>
                        <p className="proj-desc">The website I created for my wedding that contained all the wedding information, a photo gallery and with the use of Google Forms, a place to RSVP. Besides being a resource for the wedding, this site challenged my creative/artistic side. </p>
                        <div className="tech-list">
                            <p className="tech-title">Tech</p>
                                <ul>
                                    <li>Javascript</li>
                                    <li>HTML/CSS</li>
                                </ul>
                        </div>
                        <button className="view-btn"><a href={"https://johnnybedge.github.io/weddingSite/"}>View Project</a></button>
                    </div>
                </div>

            </div> 
        </>
    );
};

export default Projects