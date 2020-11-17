import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapState = (state) => {
    // console.log(state)
    return {
        errors: state.errors,
        formType: 'signup'
    }
}

const mapDisp = (dispatch) => {
    return {
        processForm: (user) => dispatch(signup(user))
    }
}

export default connect(mapState, mapDisp)(SessionForm);