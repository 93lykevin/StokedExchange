import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import ProductIndexContainer from './product/product_index_container';
import ProductShowContainer from './product/product_show_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SellFormContainer from './product_listing/sell_form_container';
import BuyFormContainer from './product_listing/buy_form_container';
import SplashContainer from './splash/splash_container';
import ListingSellContainer from './product_listing/listings_sell_container';
// import BuyListingContainer from './product_listing/buy_listings_container';

const App = () => (
    <div className="app-container">
        <div className="site-header">
            <span></span>
            <div className="header-container">
                <GreetingContainer/>
            </div>
        </div>

        <div className="main-container">
            <Switch>
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <ProtectedRoute exact path="/sell" component={SignupFormContainer}/>
                <ProtectedRoute exact path="/sell/:id" component={SellFormContainer}/>
                <ProtectedRoute exact path="/selling" component={ListingSellContainer}/>
                <ProtectedRoute exact path="/buy/:id" component={BuyFormContainer}/>
                {/* <ProtectedRoute exact path="/buying/" component={BuyListingContainer}/> */}
                <Route path="/product/:id" component={ProductShowContainer} />
                <Route exact path="/index" component={ProductIndexContainer} />
                <Route path="/" component={SplashContainer} />
               
                <Redirect to="/"/>
            </Switch>
        </div>
        {/* <div className="footer-container">
            <div className="footer-content">
                insert footer here
            </div>
        </div> */}
    </div>
)

export default App;