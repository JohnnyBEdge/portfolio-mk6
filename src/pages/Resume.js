import React from 'react';
import '../comp-style/resume.css';
import { Link } from 'react-router-dom';


const Resume = () => {


    return (
        <div id="resume_container">
            <h2>Resume</h2>
            <p><Link to="/">(Return Home)</Link></p>
            {/* <embed src= type="application/docx" width="100%" height="600px" /> */}
            <iframe title="resume" src="/assets/resume-05-2020.pdf" width="80%" height="900px"></iframe>
        </div>
    )
};

export default Resume;