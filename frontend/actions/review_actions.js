import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const CLEAR_REVIEW_ERRORS = 'CLEAR_REVIEW_ERRORS';

const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
});
const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
});
const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
});

export const receiveReviewErrors = (errors) => {
    return ({
        type: RECEIVE_REVIEW_ERRORS,
        errors
    })
}
export const clearReviewErrors = () => ({
    type: CLEAR_REVIEW_ERRORS
});

export const fetchReviews = (spotId) => dispatch => {
    return APIUtil.fetchReviews(spotId)
        .then(reviews => {
            return dispatch(receiveReviews(reviews))
        })
}
export const fetchReview = reviewId => dispatch => {
    // debugger
    return APIUtil.fetchReview(reviewId)
        .then(review => {
            return dispatch(receiveReview(review))
        })
}
export const createReview = review => dispatch => {
    debugger
    return APIUtil.createReview(review)
        .then(review => {
            debugger
            return dispatch(receiveReview(review))
        },
            (err) => {
                debugger
                return dispatch(receiveReviewErrors(err.responseJSON))
            })
}
// export const updateBooking = booking => dispatch => {
//     return APIUtil.updateBooking(booking)
//         .then(booking => {
//             // debugger
//             return dispatch(receiveBooking(booking))
//         },
//             (err) => {
//                 // debugger
//                 return dispatch(receiveBookingErrors(err.responseJSON))
//             })
// }
export const deleteReview = reviewId => dispatch => {
    return APIUtil.deleteReview(reviewId)
        .then(() => {
            return dispatch(removeReview(reviewId))
        })
}