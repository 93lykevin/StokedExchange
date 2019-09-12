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
            "Welcome Back" ) : ( "Let's get jiggy wid it!" 
        )

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
    
    handleToggle(e) {
        this.props.clearErrors();
        // (e.currentTarget).classList.toggle('toggle-option-active')
    }

    renderErrors() {
        return(
            <ul className="errors-list">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    } 

    render() {
        const loginClassName = this.props.formType === 'login' ? 'toggle-option-active' : 'toggle-option';
        const signupClassName = this.props.formType === 'signup' ? 'toggle-option-active' : 'toggle-option';
        return(
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="welcome-to-streetx">
                        <h3>Welcome to StreetX!</h3>
                    </div>

                    <div className="access-toggle">
                        <Link to="/login" className={loginClassName} onClick={this.handleToggle}>Login</Link>
                        <Link to="/signup"className={signupClassName} onClick={this.handleToggle}>Sign Up</Link>
                    </div>


                    <div className="render-errors-div">
                    {this.renderErrors()}
                    </div>
                    <div className="login-form">
                        {/* <div className="welcome-message">{this.message}</div> */}
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
                        <input className="session-submit" type="submit" value=""/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;