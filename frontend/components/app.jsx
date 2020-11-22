import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute } from '../util/route_util';
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NavbarContainer from './navbar/navbar_container';
import SplashContainer from './splash/splash_container';
import SpotShowContainer from './spot/spot_show_container';
// import SpotIndexContainer from './spot/spot_index_container';
import Modal from './modal/modal';

const App = () => (
    <div>
        <Modal />
        <header>
            <NavbarContainer />
        </header>

            {/* <h1> Tree Camp </h1> */}
            {/* <GreetingContainer /> */}

        <Switch>
            <Route exact path="/" component={SplashContainer} />
            <Route exact path="/spots/:spotId" component={SpotShowContainer} />
            {/* <Route path="/posts/:postId/edit" component={EditPostFormContainer} /> */}
        </Switch>

        {/* <SplashContainer /> */}
    </div>
);

export default App;