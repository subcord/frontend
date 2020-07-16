import React from 'react';
import './header.css';
import logo from './logo.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faReddit} from '@fortawesome/free-brands-svg-icons';

function Header() {
    return (
        <div>
            <div className="Header-bar">
                <div className="Header">
                    <img src={logo} className="Header-image" height={70} alt="subcord logo" />
                    <h1 className="Header-text">
                        SUBCORD
                    </h1>
                    <div className="Header-link-container">
                        <a href="#" className="Header-link active-link">
                            Home
                        </a>
                        <a href="#" className="Header-link">
                            Reddit
                        </a>
                        <a href="#" className="Header-link">
                            Panley Entertainment
                        </a>
                        <a href="#" className="Header-link reddit">
                            <FontAwesomeIcon icon={faReddit} />
                            Sign in with Reddit
                        </a>
                    </div>
                </div>
            </div>
            <div className="Header-content-block"></div>
        </div>
    );
}

export default Header;
