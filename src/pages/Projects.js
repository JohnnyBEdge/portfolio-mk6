import React from 'react';
import '../comp-style/projects.css';
import LearnCenter from '../comp-style/imgs/learn-center.png';
import Wedding from '../comp-style/imgs/wedding.png';
import data from '../data/project-data.json';
import GearCloset from '../comp-style/imgs/gear-closet.png'

const Projects = () => {
    let index = 0;
    // const project = data.map((proj) => {
        
    //     return (<div id="project_${proj.id}" className="project">
    //                 <div className="proj proj-img">
    //                     <div className="img-frame">
    //                         <img src={proj.image} alt="Project screenshot"/>
    //                     </div>
    //                 </div>
    //                 <div className="proj proj-info">
    //                     <p className="proj-title">{proj.title}</p>
    //                     <p className="proj-desc">{proj.summary}</p>
    //                     <div className="tech-list">
    //                     <p className="tech-title">Tech</p>
    //                         <ul>
    //                             <li>Javascript</li>
    //                             <li>React</li>
    //                             <li>Express</li>
    //                             <li>MongoDB</li>
    //                             <li>Reactstrap</li>
    //                         </ul>
    //                     </div>
    //                     <button className="view-btn"><a href={proj.heroku}>View Project</a></button>

    //                 </div>
    //             </div>)
    // })

    return (

        <>
            <div id="projects_container" className="section">
<div className="seperator"></div> 
                <h2>Projects</h2>
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
                        <button className="view-btn"><a href={"http://www.google.com"}>View Project</a></button>

                    </div>
                </div>
                
<div className="seperator"></div> 


                <div id="project_2" className="project">
                    <div className="proj proj-info">
                        <p className="proj-title">Gear Closet</p>
                        <p className="proj-desc">The gearhead's organizational tool. Create a database for all your gear. Make lists for your trips: 3 day car camping needs vs 1 week backpacking. Build out a list for every occasion and you'll never forget those necessities.</p>
                        <div className="tech-list">
                            <p className="tech-title">Tech</p>
                                <ul>
                                    <li>Javascript</li>
                                    <li>React</li>
                                    <li>Express</li>
                                    <li>MongoDB</li>
                                </ul>
                        </div>
                        <button className="view-btn"><a href={"https://gear-closet-app.herokuapp.com/"}>View Project</a></button>
                    </div>
                    <div className="proj proj-img">
                        <div className="img-frame">
                            <img src={GearCloset} alt="Project screenshot"/>
                        </div>
                    </div>
                </div>

<div className="seperator"></div>



                <div id="project_2" className="project">
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
                        <button className="view-btn"><a href={"https://lefartins.herokuapp.com/"}>View Project</a></button>
                    </div>
                </div>

            </div> 
        </>
    );
};

export default Projects