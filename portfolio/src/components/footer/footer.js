import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <nav class="navbar fixed-bottom navbar-light bg-light d-block text-center">
                <a href="https://www.linkedin.com/in/brookeparrish/" target="_blank">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a class="pl-1" href="https://www.github.com/brookeparrish/" target="_blank">
                    <i class="fab fa-github"></i>
                </a>
        </nav>
    );
}

export default Footer;