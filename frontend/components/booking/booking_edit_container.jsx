import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import BookingEdit from "./booking_edit.jsx";
import { fetchSpot } from "../../actions/spot_actions";
import { updateBooking, fetchBooking } from "../../actions/booking_actions";

const mapState = (state, ownProps) => {
  return {
    booking: state.entities.bookings[ownProps.match.params.bookingId],
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.bookings,
  };
};

const mapDisp = (dispatch) => {
  return {
    fetchBooking: (bookingId) => dispatch(fetchBooking(bookingId)),
    fetchSpot: (spotId) => dispatch(fetchSpot(spotId)),
    updateBooking: (booking) => dispatch(updateBooking(booking)),
  };
};

export default withRouter(connect(mapState, mapDisp)(BookingEdit));
