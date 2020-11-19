import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRRORS';

import { closeModal } from './modal_actions';

const receiveCurrentUser = (currentUser) => {
    return ({
        type: RECEIVE_CURRENT_USER,
        currentUser
    })
}
const logoutCurrentUser = () => {
    return ({
        type: LOGOUT_CURRENT_USER,
    })
}
const receiveErrors = (errors) => {
    return ({
        type: RECEIVE_ERRORS,
        errors
    })
}

export const login = (user) => dispatch => {
    return APIUtil.login(user)
        .then(currentUser => {
            dispatch(receiveCurrentUser(currentUser)), 
            dispatch(closeModal())
        },
        // .then(() => dispatch(closeModal())), 
        (err) => { 
            return dispatch(receiveErrors(err.responseJSON))
        })
}

export const signup = (user) => dispatch => {
    return APIUtil.signup(user)
    .then((currentUser) => {
        dispatch(receiveCurrentUser(currentUser)),
        dispatch(closeModal())
    },
    err => (
    dispatch(receiveErrors(err.responseJSON)
    ))
)}

export const logout = () => dispatch => {
    return APIUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
}