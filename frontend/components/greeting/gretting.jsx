import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {

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

    const sessionLinks = () => (
        <nav className="login-signup"> 
            <Link to="/login">Login</Link>
            &nbsp;or&nbsp;
            <Link to="/signup">Sign Up</Link>
        </nav>
    );

    const personalGreeting = () => (
        <hgroup className="header-group">
            <section className="sauce">
                <h2 className="header-name">Hi, {currentUser.username}! </h2>
                {navBar()}
            </section>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting