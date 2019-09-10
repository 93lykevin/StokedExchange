import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
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
                        <div className="toggle-option" onClick={this.handleToggle}>Login</div>
                        <div className="toggle-option" onClick={this.handleToggle}>Sign Up</div>
                        Please {this.props.formType} or {this.props.navLink}
                    </div>
                    
                    {this.renderErrors()}
                    <div className="login-form">
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
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;