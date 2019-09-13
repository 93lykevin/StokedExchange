import React from 'react';
import { Link } from 'react-router-dom';
    
class Greeting extends React.Component {
    constructor(props){
        super(props);

        this.demoUser = {
            username: 'mohito',
            password: 'burrito',
        };

        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }

    handleDemoLogin(e) {
        e.preventDefault();
        this.props.processForm(this.demoUser);
    }

    navBar() {
        return(
        <div className="nav-bar-container">
            <div className='nav-bar-main'>
                <div className="logo-nav">
                    <Link to="/"><img src={window.streetxURL} alt="logo" className="logo"/></Link>
                </div>
                <div className="nav-bar-list-div">
                    {this.Welcome()}
                </div>
            </div>
        </div>
       )
    };

    sessionLinks() {
        return (
            <nav className="nav-bar-list" >
                <ul className="nav-bar-list-ul">
                    <li><Link to="/index">Browse</Link></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">About</a></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><button onClick={this.handleDemoLogin}>Demo</button></li>
                    <li className='sell-button'><Link to="/sell">Sell</Link></li>
                </ul>
            </nav>
        );
    }

    personalGreeting() {
        return (
            <nav className="nav-bar-list" >
                <ul className="nav-bar-list-ul">
                    <li><Link to="/index">Browse</Link></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Account</a></li>
                    <li><button className="header-button" onClick={this.props.logout}>Log Out</button></li>
                    <li className='sell-button'><Link to="/sell">Sell</Link></li>
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