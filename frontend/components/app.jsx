import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute } from '../util/route_util';
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NavbarContainer from './navbar/navbar_container';
import SplashContainer from './splash/splash_container';
import Modal from './modal/modal';

const App = () => (
    <div>
        <Modal />
        <header>
            <NavbarContainer />
        </header>

            {/* <h1> Tree Camp </h1> */}
            {/* <GreetingContainer /> */}

        {/* <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} /> */}
        <SplashContainer />
    </div>
);

export default App;