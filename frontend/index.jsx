import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { signup, login, logout } from './util/session_api_util';
import { fetchSpots, fetchSpot } from './actions/spot_actions';
import Root from './components/root'
import {openModal} from './actions/modal_actions';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    //test start here

    window.login = login
    window.openModal = openModal;
    window.dispatch = store.dispatch;

    window.getState = store.dispatch;
    window.fetchSpots = fetchSpots;

    //test ends here

    ReactDOM.render(<Root store={store}/>, root);
});