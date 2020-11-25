import * as APIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';

const receiveBookings = bookings => ({
    type: RECEIVE_BOOKINGS,
    bookings
});

const receiveBooking = booking => ({
    type: RECEIVE_BOOKING,
    booking
});

const removeBooking = bookingId => ({
    type: REMOVE_BOOKING,
    bookingId
});

export const fetchBookings = () => dispatch => {
    return APIUtil.fetchBookings()
    .then(bookings => {
        return dispatch(receiveBookings(bookings))
    })
}
export const fetchBooking = bookingId => dispatch => {
    return APIUtil.fetchBooking(bookingId)
    .then(booking => {
        return dispatch(fetchBooking(booking))
    })
}
export const createBooking = booking => dispatch => {
    return APIUtil.createBooking(booking)
    .then(booking => {
        return dispatch(receiveBooking(booking))
    })
}
export const updateBooking = booking => dispatch => {
    return APIUtil.updateBooking(booking)
    .then(booking => {
        return dispatch(receiveBooking(booking))
    })
}
export const deleteBooking = bookingId => dispatch => {
    return APIUtil.deleteBooking(bookingId)
    .then(() => {
        return dispatch(removeBooking(bookingId))
    })
}