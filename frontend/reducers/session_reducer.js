import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';;

const _nullSession = {
    id: null,
}
export default (state = _nullSession, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState.id = action.currentUser.id;
            return newState;

        case LOGOUT_CURRENT_USER:
            return _nullSession;

        default:
            return state;
    }
}