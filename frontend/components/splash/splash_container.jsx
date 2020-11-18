import React from 'react';
import { connect } from 'react-redux';
// import { logout } from '../../actions/session_actions';
import Splash from './splash';
// import { openModal } from '../../actions/modal_actions';

const mapState = state => {
    let currentUserId = state.session.id;

    return {
        currentUser: state.entities.users[currentUserId]
    }
}

// const mapDisp = dispatch => {
//     return {
//         logout: () => dispatch(logout()),
//         openModal: modal => dispatch(openModal(modal))
//     }
// }

export default connect(mapState, null)(Splash);