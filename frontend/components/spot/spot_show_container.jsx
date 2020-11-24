import React from 'react';
import { connect } from 'react-redux';
import SpotShow from "./spot_show.jsx";
import { fetchSpot } from '../../actions/spot_actions';
import { fetchUsers, updateUser } from '../../actions/user_actions';
import { createBooking, deleteBooking } from '../../actions/booking_actions';


const mapState = (state, ownProps) => {
    // console.log(ownProps)
    // console.log(state)
    let currentUserId = state.session.id;
    return {
        spot: state.entities.spots[ownProps.match.params.spotId],
        users: state.entities.users,
        spots: state.entities.spots,

        //for booking form
        currentUserId: state.session.id,
    }
}

const mapDisp = dispatch => {
    return {
        fetchSpot: spotId => dispatch(fetchSpot(spotId)),
        fetchUsers: () => dispatch(fetchUsers()),
        // updateUser: (user) => dispatch(updateUser(user)),

        //for booking form
        createBooking: (booking) => dispatch(createBooking(booking)),
        deleteBooking: (bookingId) => dispatch(deleteBooking(bookingId)),
    }
}

export default connect(mapState, mapDisp)(SpotShow);