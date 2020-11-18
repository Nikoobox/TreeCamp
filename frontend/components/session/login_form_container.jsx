import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapState = (state) => {
    
    return {
        errors: state.errors.session,
        formType: 'Log In',
        buttonText: 'Log In',
    }
}

const mapDisp = (dispatch) => {
    return {
        processForm: (user) => dispatch(login(user)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapState, mapDisp)(SessionForm);
