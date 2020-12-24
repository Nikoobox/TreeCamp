import { RECEIVE_REVIEW, RECEIVE_REVIEW_ERRORS, CLEAR_REVIEW_ERRORS } from '../actions/REVIEW_actions';

const reviewErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_REVIEW:
            return [];

        case RECEIVE_REVIEW_ERRORS:
            return action.errors;

        case CLEAR_REVIEW_ERRORS:
            return [];

        default:
            return oldState;
    }
};

export default reviewErrorsReducer;