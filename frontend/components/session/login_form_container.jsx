import React from 'react';
import { connect } from 'react-redux';
import { login, receiveErrors, clearSessionErrors } from '../../actions/session_actions';
import { clearBookingErrors } from '../../actions/booking_actions';
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
        clearSessionErrors: () => dispatch(clearSessionErrors()),
        closeModal: () => {
                        dispatch(closeModal()); 
                        // dispatch(receiveErrors([]));
                        dispatch(clearBookingErrors())
                        },
        login: (user) => dispatch(login(user)),
    }
}

export default connect(mapState, mapDisp)(SessionForm);
