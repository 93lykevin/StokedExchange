import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import { login , logout } from './actions/session_actions';
import { requestProducts } from './actions/product_actions';
import Root from './components/root';
import { seedDb, postStockx, getPicture, search } from './util/stockx_api_util';



document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState= {
            session: {id: window.currentUser.id},
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.seedDb = seedDb;
    window.search = search;
    window.getPicture = getPicture;
    window.postStockx = postStockx;
    window.requestProducts = requestProducts;
    window.login = login;
    window.store = store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
});