import React from 'react';
import { connect } from 'react-redux';
// import { logout } from '../../actions/session_actions';
// import { receiveBookings } from '../../actions/booking_actions';
import Footer from './footer';
// import { openModal } from '../../actions/modal_actions';

const mapState = state => {
    // console.log(state);
    let currentUserId = state.session.id;

    return {
        currentUser: state.entities.users[currentUserId],
        currentUserId: state.session.id
    }
}

// const mapDisp = dispatch => {
//     return {
//         // openModal: modal => dispatch(openModal(modal))
//     }
// }

export default connect(mapState, null)(Footer);