export const fetchReviews = (spotId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/spots/${spotId}/reviews`,
    })
}

export const fetchReview = reviewId => {
    return $.ajax({
        method: 'GET',
        url: `/api/reviews/${reviewId}`
    })
};

export const createReview = review => {
    // debugger
    return $.ajax({
        method: 'POST',
        url: `/api/reviews`,
        data: {review}
    })

}

export const updateReview = (review) => {
    // debugger
    return $.ajax({
        method: 'PATCH',
        url: `api/reviews/${review.id}`,
        data: { review }
    })
}

export const deleteReview = (reviewId) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/reviews/${reviewId}`
    })
}