import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { signup, login, logout } from './util/session_api_util';
import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();

    //test start here
    window.login = login
    //test ends here

    ReactDOM.render(<h1>Welcome to TreeCamp</h1>, root);
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