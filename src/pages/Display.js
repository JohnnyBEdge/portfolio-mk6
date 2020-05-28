import React from 'react';
import Welcome from './Welcome';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import '../comp-style/display.css';

const Display = () =>{
    
    return (
        
        <div id="main_container">
            <Welcome />
            <About />
            <Projects />
            <Contact /> 
        </div>
        
    );

}

export default Display