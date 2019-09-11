import React from 'react';

const navBar = () => (
    <div className="nav-bar-container">
        <img src={window.streetxURL} alt="logo" className="logo" />
        <nav className="nav-bar-list" >
            <ul>
                <li><a href="#">Browse</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Account</a></li>
                <li><a href="#">Sell</a></li>
                <li><button className="header-button" onClick={logout}>Log Out</button></li>
            </ul>
        </nav>
    </div>
);