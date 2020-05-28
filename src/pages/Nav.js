import React from 'react';
import '../comp-style/nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <div id="nav_container">
            <a className="nav-link" href="#profile_container">About</a>
            <a className="nav-link" href="#projects_container">Projects</a>
            <Link to="/resume">Resume</Link>

        </div>
    )
};

export default Nav;