import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

export default (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // debugger
            newState[action.currentUser.id] = action.currentUser
            return newState;

        default:
            return oldState;
    }
}