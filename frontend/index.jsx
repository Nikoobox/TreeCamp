import React from "react";
import ReactDOM from "react-dom";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});


$.ajax({
    method: "post",
    url: "/api/users",
    data: {
        user: {
            email: "user1@gmail.com",
            first_name: "fname1",
            last_name: "lname1",
            password: "1234567"
        }
    }
})