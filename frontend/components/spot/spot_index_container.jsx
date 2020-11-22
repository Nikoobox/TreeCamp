import React from 'react';
import { connect } from 'react-redux';
import SpotIndex from "./spot_index.jsx";
import { fetchSpots, fetchSpot } from '../../actions/spot_actions';

const mapState = state => {
  // console.log(state)
  return {
    spots : Object.values(state.entities.spots)
  }
}

const mapDisp = dispatch => {
  return {
    fetchSpots: () => dispatch(fetchSpots()),
    // fetchSpot: spot => dispatch(fetchSpot(spot))
  }
}

export default connect(mapState, mapDisp)(SpotIndex);