import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapState = state => {
    let currentUserId = state.session.id;
    // debugger
    return {
        currentUser: state.entities.users[currentUserId]
    }
}

const mapDisp = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapState, mapDisp)(Greeting);