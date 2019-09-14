import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import ProductIndexContainer from './product/product_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
const App = () => (
    <div className="app-container">
        <div className="site-header">
            <span></span>
            <div className="">
                <GreetingContainer />
            </div>
        </div>

        <div className="main-container">
            <Switch>
                <AuthRoute exact path="/login" component={LoginFormContainer}/>
                <AuthRoute exact path="/signup" component={SignupFormContainer}/>
                <AuthRoute exact path="/sell" component={SignupFormContainer}/>
                <Route exact path="/index" component={ProductIndexContainer} />
                <Route exact path="/supreme" component={ProductIndexContainer}/>
                <Route exact path="/bape" component={ProductIndexContainer}/>
                <Route exact path="/kith" component={ProductIndexContainer}/>
                <Route exact path="/palace" component={ProductIndexContainer}/>
                <Route exact path="/fearofgod" component={ProductIndexContainer}/>
                <Route exact path="/offwhite" component={ProductIndexContainer}/>
                <Route exact path="/nike" component={ProductIndexContainer}/>
                <Redirect to="/" />
            </Switch>
        </div>
    </div>
)

export default App;