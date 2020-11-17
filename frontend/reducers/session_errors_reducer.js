import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';

export default (oldState = [], action) => {
    Object.freeze(oldState);
    // let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // newState[action.errors] = [];
            return [];
        case RECEIVE_ERRORS:
            // newState[action.errors] = action.errors
            return action.errors;
        default:
            return oldState;
    }
}