import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthRoute } from '../util/route_util';
// import LoginFormContainer from './session/login_form_container';
// import SignupFormContainer from './session/signup_form_container';
import NavbarContainer from './navbar/navbar_container';
import FooterContainer from './footer/footer_container';
import SplashContainer from './splash/splash_container';
import SpotShowContainer from './spot/spot_show_container';
import BookingIndexContainer from './booking/booking_index_container';
import BookingEditContainer from './booking/booking_edit_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import LocationMapContainer from './search/location_map_container';
import NotFoundPage from './notfoundpage/not_found_page.jsx';
import About from './about/about.jsx';
import Modal from './modal/modal';

const App = () => (
    <>
        <div className='main'>
            <Modal />
            <header>
                <NavbarContainer />
            </header>

            <Switch>
                <Route exact path="/" component={SplashContainer} />
                <Route exact path="/about" component={About} />
                <Route exact path="/spots/:spotId" component={SpotShowContainer} />
                <Route exact path="/users/:userId/bookings" component={BookingIndexContainer} />
                <Route path="/users/:userId/bookings/:bookingId/edit" component={BookingEditContainer} />
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <Route exact path="/browse/:locationId" component={LocationMapContainer} />
                <Route path="*" component={NotFoundPage} />
            </Switch>
                <footer>
        
        <FooterContainer />
                </footer>
        </div>
    </>
);

export default App;