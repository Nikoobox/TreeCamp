import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapState = (state) => {
    console.log(state)
    return {
        errors: state.errors,
        formType: 'login'
    }
}

const mapDisp = (dispatch) => {
    return {
        processForm: (user) => dispatch(login(user))
    }
}

export default connect(mapState, mapDisp)(SessionForm);
