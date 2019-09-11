import React from 'react';
import { Link } from 'react-router-dom';
// const Greeting = ({ currentUser, logout }) => {
    
class Greeting extends React.Component {
    constructor(props){
        super(props);
        // currentUser= this.props.currentUser
        // logout= this.props.logout
    }

    navBar() {
        return(
        <div className="nav-bar-container">
            <Link to="/">
                <img src={window.streetxURL} alt="logo" className="logo"  />
            </Link>
            {this.Welcome()}
        </div>
       )
    };

    sessionLinks() {
        return (
            <nav className="nav-bar-list" >
                <ul>
                    <li><a href="#">Browse</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>

                </ul>
            </nav>
        );
    }

    personalGreeting() {
        return (
            <nav className="nav-bar-list" >
                <ul>
                    <li><a href="#">Browse</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Account</a></li>
                    <li><a href="#">Sell</a></li>
                    <li><button className="header-button" onClick={this.props.logout}>Log Out</button></li>
                </ul>
            </nav>
        );
    }

    Welcome() {
        return this.props.currentUser ? this.personalGreeting() : this.sessionLinks();
    }

    render() {
        return(
            this.navBar()
        )
    }
};

export default Greeting