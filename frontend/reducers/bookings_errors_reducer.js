import { RECEIVE_BOOKING, RECEIVE_BOOKING_ERRORS, CLEAR_BOOKING_ERRORS } from '../actions/booking_actions';

const bookingsErrorsReducer = (oldState = [], action) => {
    // console.log(action)
    Object.freeze(oldState)
    // const newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_BOOKING:
            return [];

        case RECEIVE_BOOKING_ERRORS:
            return action.errors;
        
        case CLEAR_BOOKING_ERRORS:
            return [];

        default:
            return oldState;
    }
};

export default bookingsErrorsReducer;