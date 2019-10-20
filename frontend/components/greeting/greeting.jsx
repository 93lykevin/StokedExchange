import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchBarContainer from '../searchbar/searchbar_container';
    
class Greeting extends React.Component {
  constructor(props){
    super(props);

    this.demoUser = {
      username: 'mohito',
      password: 'burrito'
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

    componentDidMount() {
        // this.props.requestProducts();
    }

    handleDemoLogin(e) {
        e.preventDefault();
        this.props.processForm(this.demoUser);
    }

    handleToggle(e) {
        this.props.clearErrors();
    }

    navBar() {
        return(
        <div className="nav-bar-container">
            <div className='nav-bar-main'>
                <div className="logo-nav">
                    <Link to="/"><img src={window.streetxURL} alt="logo" className="logo"/></Link>
                </div>
                <div className="searchbar">
                    <SearchBarContainer />
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
                    <li><Link to="/selling">Portfolio</Link></li>
                    {/* <li><a href="#">About</a></li> */}
                    <li><Link to="/login" onClick={this.handleToggle}>Login</Link></li>
                    <li><Link to="/signup" onClick={this.handleToggle}>Sign Up</Link></li>
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
            <li><Link to="/selling">Portfolio</Link></li>
            {/* <li><a href="#">About</a></li> */}
            {/* <li><a href="https://www.linkedin.com/in/93lykevin/">LinkedIn</a></li> */}
            {/* <li><a href="https://github.com/93lykevin/">Github</a></li> */}
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
export default withRouter(Greeting)
