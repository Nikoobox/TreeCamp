json.partial! "api/bookings/booking", booking: @booking
json.max_visitors @booking.spot.area.max_guests
json.price_per_night @booking.spot.price