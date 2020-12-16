import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_SESSION_ERRORS  } from '../actions/session_actions';

export default (oldState = [], action) => {
    Object.freeze(oldState);
// debugger
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return [];

        case RECEIVE_ERRORS:
            // debugger
            return action.errors;

        case CLEAR_SESSION_ERRORS:
            // debugger
            return [];
            
        default:
            return oldState;
    }
}