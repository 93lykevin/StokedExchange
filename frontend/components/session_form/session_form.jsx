import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            username: '',
            password: '',
            email: '',
        };

        this.demoUser = {
            username: 'mohito',
            password: 'burrito',
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

    handleDemoLogin(e) {
        e.preventDefault();
        this.props.processForm(this.demoUser);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }
    
    handleToggle(e) {
        this.props.clearErrors();
    }

    renderErrors() {
        if (this.props.errors.length > 0) {
            return(
                <div className="errors-list">
                    {this.props.errors[0]}
                </div>
            );
        }
    }

    signUp() {
        return(
            <div className="signup-form">
                <input type="text"
                    placeholder="First Name"
                    onChange={this.update('first_name')}
                    className="login-input"
                />
                <br />
                <input type="text"
                    placeholder="Last Name"
                    onChange={this.update('last_name')}
                    className="login-input"
                />
                <br />
                <input type="text"
                    placeholder="Username"
                    onChange={this.update('username')}
                    className="login-input"
                />
                <br />
                <input type="password"
                    placeholder="Password"
                    onChange={this.update('password')}
                    className="login-input"
                />
                <br />
                <input type="text"
                    placeholder="Email"
                    onChange={this.update('email')}
                    className="login-input"
                />
            </div>
        )
    }

    login() {
        return(
            <div className="login-form">
                <input type="text"
                    placeholder="Username"
                    onChange={this.update('username')}
                    className="login-input"
                />
                <br />
                <input type="password"
                    placeholder="Password"
                    onChange={this.update('password')}
                    className="login-input"
                />
            </div>
        )   
    }

    render() {
        const loginClassName = this.props.formType === 'login' ? 'toggle-option-active' : 'toggle-option';
        const signupClassName = this.props.formType === 'signup' ? 'toggle-option-active' : 'toggle-option';
        const buttonText = this.props.formType === 'login' ? 'Login' : 'Sign Up';
        return(
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="welcome-to-streetx">
                      <div className="copyright"><i className="far fa-copyright"></i>&nbsp;StreetX by Kevin Ly</div>
                    </div>

                    <div className="access-toggle">
                        <Link to="/login" className={loginClassName} onClick={this.handleToggle}>Login</Link>
                        <Link to="/signup"className={signupClassName} onClick={this.handleToggle}>Sign Up</Link>
                    </div>

                    <div className="render-errors-div">
                       {this.renderErrors()}
                    </div>

                    <div className="login-or-signup">
                        {this.props.formType === 'login' ? this.login() : this.signUp()}
                    </div>

                    <br />
                    
                    <div className="submit-buttons">
                        <input className="session-submit" type="submit" value={buttonText} />
                        <button className="session-submit" onClick={this.handleDemoLogin}>Demo</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;