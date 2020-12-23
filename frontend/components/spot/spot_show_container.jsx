import React from 'react';
import { connect } from 'react-redux';
import SpotShow from "./spot_show.jsx";
import { fetchSpot, fetchSpots } from '../../actions/spot_actions';
import { fetchUsers, updateUser } from '../../actions/user_actions';
import { createBooking, deleteBooking } from '../../actions/booking_actions';


const mapState = (state, ownProps) => {
    return {
        spot: state.entities.spots[ownProps.match.params.spotId],
        users: state.entities.users,
        spots: state.entities.spots,
    }
}

const mapDisp = dispatch => {
    return {
        fetchSpot: spotId => dispatch(fetchSpot(spotId)),
        fetchUsers: () => dispatch(fetchUsers()),
    }
}

export default connect(mapState, mapDisp)(SpotShow);