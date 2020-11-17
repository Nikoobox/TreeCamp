import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute } from '../util/route_util';
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';


const App = () => (
    <div>
        <header>
            <h1> Tree Camp </h1>
            <GreetingContainer />
        </header>

        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />

    </div>
);

export default App;