import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { signup, login, logout } from './util/session_api_util';
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
    //test ends here

    ReactDOM.render(<Root store={store}/>, root);
});







// $.ajax({
//     method: "post",
//     url: "/api/users",
//     data: {
//         user: {
//             email: "user1@gmail.com",
//             first_name: "fname1",
//             last_name: "lname1",
//             password: "1234567"
//         }
//     }
// })


// document.addEventListener("DOMContentLoaded", () => {
//     const root = document.getElementById("root");
//     const store = configureStore();

//     //test start here
//     window.login = login
//     window.openModal = openModal;
//     window.dispatch = store.dispatch;
//     //test ends here

//     // ReactDOM.render(<h1>Welcome to TreeCamp</h1>, root);
//     ReactDOM.render(<Root store={store} />, root);
// });