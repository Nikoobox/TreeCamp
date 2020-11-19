import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { receiveErrors } from '../../actions/session_actions';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
// import '../../app/assets/stylesheets/components/modal.scss';

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};
const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => {
            dispatch(closeModal());
            dispatch(receiveErrors([]))
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal);