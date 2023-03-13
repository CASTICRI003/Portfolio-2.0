import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
    return (
        <div id="footer" className='d-flex justify-content-center vh-10 bg-dark'>
            <footer>
            <a className="mx-3" href="https://github.com/CASTICRI003"><FontAwesomeIcon icon={faGithub} size="3x"/></a>
            <a className="mx-3" href="https://www.linkedin.com/in/CASTICRI003"><FontAwesomeIcon icon={faLinkedin} size="3x" /></a>
            <a className="mx-3" href="https://stackoverflow.com/users/20021688/cris"><FontAwesomeIcon icon={faStackOverflow} size="3x" /></a>
            </footer>
        </div>
    )
} 