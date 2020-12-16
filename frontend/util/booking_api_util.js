export const fetchBookings = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/bookings',
    })
}

export const fetchBooking = bookingId => (
    $.ajax({
        method: 'GET',
        url: `/api/bookings/${bookingId}`
    })
);

export const createBooking = booking => {
    // debugger
    return $.ajax({
        method: 'POST',
        url: `/api/bookings`,
        data: {booking}
    })

}

export const updateBooking = (booking) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/bookings/${booking.id}`,
        data: { booking }
    })
}

export const deleteBooking = (bookingId) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/bookings/${bookingId}`
    })
}