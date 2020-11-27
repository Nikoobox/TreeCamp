import React from 'react';
import { connect } from 'react-redux';
import SpotBookingWidget from "./spot_booking_widget.jsx";
import { createBooking, clearBookingErrors, receiveBookingErrors } from '../../actions/booking_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapState = (state, ownProps) => {
    // console.log(state);
    return {
        spots: state.entities.spots,
        currentUserId: state.session.id,
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.bookings
    }
}

const mapDisp = dispatch => {
    return {
        fetchBookings: () => dispatch(fetchBookings()),

        createBooking: booking => {
            dispatch(createBooking(booking))
        },

        openModal: modal => {
            dispatch(openModal(modal));
        },

        clearBookingErrors: ()=>dispatch(clearBookingErrors())
    }
}

export default connect(mapState, mapDisp)(SpotBookingWidget);