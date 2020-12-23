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
    debugger
    return $.ajax({
        method: 'POST',
        url: `/api/reviews`,
        data: {review}
    })

}

// export const updateBooking = (booking) => {
//     return $.ajax({
//         method: 'PATCH',
//         url: `api/bookings/${booking.id}`,
//         data: { booking }
//     })
// }

export const deleteReview = (reviewId) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/reviews/${reviewId}`
    })
}