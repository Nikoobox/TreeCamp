import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import BookingEdit from "./booking_edit.jsx";
import { fetchSpot, fetchSpots } from '../../actions/spot_actions';
import { updateBooking, clearBookingErrors, fetchBooking} from '../../actions/booking_actions';

const mapState = (state, ownProps) => {
    // console.log(state)
    // console.log(ownProps)
    return {
        spots: state.entities.spots,
        // spot: state.entities.spots[ownProps.match.params.spotId],
        // bookings: state.entities.bookings,
        booking: state.entities.bookings[ownProps.match.params.bookingId],
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.bookings
    }
}

const mapDisp = dispatch => {
    return {
        fetchBooking: (bookingId) => dispatch(fetchBooking(bookingId)),
        // fetchBookings: () => dispatch(fetchBookings()),
        fetchSpot: spotId => dispatch(fetchSpot(spotId)),
        fetchSpots: () => dispatch(fetchSpots()),

        updateBooking: booking => dispatch(updateBooking(booking))
        // clearBookingErrors: () => dispatch(clearBookingErrors())
    }
}

export default withRouter(connect(mapState, mapDisp)(BookingEdit));