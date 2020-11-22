import React from 'react';
import { connect } from 'react-redux';
// import { fetchUsers, updateUser } from '../../actions/user_actions';
import Splash from './splash';

const mapState = state => {
    let currentUserId = state.session.id;

    return {
        currentUser: state.entities.users[currentUserId],

    }
}

// const mapDisp = dispatch => {
//     return {
//         fetchUsers: () => dispatch(fetchUsers()),
//         updateUser: (user) => dispatch(updateUser(user)),
//     }
// }

export default connect(mapState, null)(Splash);
// export default connect(mapState, mapDisp)(Splash);