import React from 'react';
import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { closeModal } from '../../actions/modal_actions';

const mapState = (state) => {

    return {
        errors: state.errors.session,
        formType: 'Sign Up',
        buttonText: 'Join Tree Camp',
    }
}

const mapDisp = (dispatch) => {
    return {
        processForm: (user) => dispatch(signup(user)),
        closeModal: () => dispatch(closeModal()),
        login: (user) => dispatch(login(user)),
    }
}

export default connect(mapState, mapDisp)(SessionForm);