import React from 'react';
import { connect } from 'react-redux';
import SpotShow from "./spot_show.jsx";
import { fetchSpot } from '../../actions/spot_actions';
// import { fetchUser } from '../../actions/user_actions';
import { fetchUsers, updateUser } from '../../actions/user_actions';

const mapState = (state, ownProps) => {
    // console.log(ownProps)
    // console.log(state)
    return {
        spot: state.entities.spots[ownProps.match.params.spotId],
        users: state.entities.users
    }
}

const mapDisp = dispatch => {
    return {
        fetchSpot: spotId => dispatch(fetchSpot(spotId)),
        fetchUsers: () => dispatch(fetchUsers()),
        // updateUser: (user) => dispatch(updateUser(user)),
    }
}

export default connect(mapState, mapDisp)(SpotShow);