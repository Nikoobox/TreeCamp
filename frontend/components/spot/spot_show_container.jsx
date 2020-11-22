import React from 'react';
import { connect } from 'react-redux';
import SpotShow from "./spot_show.jsx";
import { fetchSpot } from '../../actions/spot_actions';
// import { fetchUser } from '../../actions/user_actions';

const mapState = (state, ownProps) => {
    // console.log(ownProps)
    // console.log(state.entities)
    return {
        spot: state.entities.spots[ownProps.match.params.spotId]
    }
}

const mapDisp = dispatch => {
    return {
        fetchSpot: spotId => dispatch(fetchSpot(spotId))
    }
}

export default connect(mapState, mapDisp)(SpotShow);