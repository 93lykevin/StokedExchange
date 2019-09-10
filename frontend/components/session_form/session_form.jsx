import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.demoUser = {
            username: 'demo',
            password: 'user',
        };

        this.message = this.props.formType === 'login' ? (
            "Welcome Back" ) : ( "Let's get jiggy wid it!" )

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleDemoLogin(e) {
        e.preventDefault();
        this.props.processForm(this.demoUser);
    }

    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    } 

    handleToggle(e) {
        this.props.clearErrors();
    }

    render() {
        return(
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    Welcome to StreetX!
                    <br/>
                    
                    <div className="access-toggle">
                        <div className="toggle-option" onClick={this.handleToggle}><Link to="/login">Login</Link></div>
                        <div className="toggle-option" onClick={this.handleToggle}><Link to="/signup">Sign Up</Link></div>
                        
                    </div>
                    
                    {this.renderErrors()}
                    <div className="login-form">
                        <div className="welcome-message">{this.message}</div>
                            <input type="text"
                                placeholder="Username"
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        <br/>
                            <input type="password"
                                placeholder="Password"
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        <br/>
                        <input className="session-submit" type="submit" value={this.props.formType} />
                        <button className="demo-login" onClick={this.handleDemoLogin}>Demo</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;