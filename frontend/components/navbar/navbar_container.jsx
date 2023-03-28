import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Navbar from './navbar';
import { openModal } from '../../actions/modal_actions';

const mapState = state => {
    let currentUserId = state.session.id;
    return {
        currentUser: state.entities.users[currentUserId],
        currentUserId: state.session.id
    }
}

const mapDisp = dispatch => {
    return {
        logout: () => {
            dispatch(logout());
        },
        openModal: modal => dispatch(openModal(modal))
    }
}

export default connect(mapState, mapDisp)(Navbar);