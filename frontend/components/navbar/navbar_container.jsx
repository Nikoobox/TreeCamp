import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
// import { receiveBookings } from '../../actions/booking_actions';
import Navbar from './navbar';
import { openModal } from '../../actions/modal_actions';

const mapState = state => {
    // console.log(state);
    let currentUserId = state.session.id;

    return {
        currentUser: state.entities.users[currentUserId]
    }
}

const mapDisp = dispatch => {
    return {
        logout: () => {
            dispatch(logout());
            // dispatch(receiveBookings({}))
        },
        openModal: modal => dispatch(openModal(modal))
    }
}

export default connect(mapState, mapDisp)(Navbar);