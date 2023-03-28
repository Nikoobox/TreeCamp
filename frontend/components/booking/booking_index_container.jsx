import { connect } from 'react-redux';
import BookingIndex from "./booking_index.jsx";
import { fetchBookings, deleteBooking } from '../../actions/booking_actions';
import { fetchSpot, fetchSpots } from '../../actions/spot_actions';


const mapState = (state, ownProps) => {

    return {
        spots: state.entities.spots,
        currentUser: state.entities.users[state.session.id],
        bookings: Object.values(state.entities.bookings),
        userId: ownProps.match.params.userId
    }
}

const mapDisp = dispatch => {

    return {
        fetchBookings: () => dispatch(fetchBookings()),
        deleteBooking: (bookingId) => dispatch(deleteBooking(bookingId)),
        fetchSpot: (spotId) => dispatch(fetchSpot(spotId)),
        fetchSpots: () => dispatch(fetchSpots()),
       
    }
}

export default connect(mapState, mapDisp)(BookingIndex);