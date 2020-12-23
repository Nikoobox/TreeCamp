import { RECEIVE_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';

const reviewsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    const newState = Object.assign({}, oldState);
    debugger
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return action.reviews;

        case RECEIVE_REVIEW:
            debugger
            newState[action.review.id] = action.review;
            return Object.assign({}, oldState, newState);

        case REMOVE_REVIEW:
            delete newState[action.reviewId];
            return newState;

        default:
            return oldState;
    }
};

export default reviewsReducer;