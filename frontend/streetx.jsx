import React from "react";
import ReactDOM from "react-dom";
// import { signup, login, logout } from './util/session_api_util';
import configureStore from './store/store';
import { login , logout } from './actions/session_actions'


document.addEventListener("DOMContentLoaded", () => {
    // window.signup = signup;
    window.login = login;
    window.logout = logout;
    const store = configureStore();
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    const root = document.getElementById("root");
    ReactDOM.render(<h1>Welcome to StreetX</h1>, root);
});