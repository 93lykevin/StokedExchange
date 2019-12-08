import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import SplashContainer from "./splash/splash_container";
import GreetingContainer from "./greeting/greeting_container";
import Footer from "./footer/footer";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";

import ProductIndexContainer from "./product/product_index_container";
import ProductShowContainer from "./product/product_show_container";

import ListingFormSellContainer from "./product_listing/listing_form_sell_container";
import ListingFormBuyContainer from "./product_listing/listing_form_buy_container";
import ListingFormEditContainer from "./product_listing/listing_form_edit_container";
import ListingIndexSellContainer from "./product_listing/listings_index_sell_container";
import ListingIndexBuyContainer from "./product_listing/listings_index_buy_container";

const App = () => (
  <div className="app-container">
    <div className="site-header">
      <span></span>
      <div className="header-container">
        <GreetingContainer />
      </div>
    </div>

    <div className="main-container">
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        {/* <ProtectedRoute exact path="/sell" component={SignupFormContainer}/> */}
        <ProtectedRoute
          exact
          path="/sell/:id"
          component={ListingFormSellContainer}
        />
        <ProtectedRoute
          exact
          path="/selling"
          component={ListingIndexSellContainer}
        />
        <ProtectedRoute
          exact
          path="/buy/:id"
          component={ListingFormBuyContainer}
        />
        <ProtectedRoute
          exact
          path="/buying/"
          component={ListingIndexBuyContainer}
        />
        <ProtectedRoute
          exact
          path="/edit/:listingId"
          component={ListingFormEditContainer}
        />
        <Route path="/product/:id" component={ProductShowContainer} />
        <Route exact path="/index" component={ProductIndexContainer} />
        <Route path="/:category" component={ProductIndexContainer} />
        <Route path="/" component={SplashContainer} />

        <Redirect to="/" />
      </Switch>
    </div>

    <div className="site-footer">
      <Footer />
    </div>
  </div>
);

export default App;
