import {RECEIVE_SPOTS, RECEIVE_SPOT} from '../actions/spot_actions';

const spotsReducer = (oldState = {}, action) => {

    // console.log(action)
    Object.freeze(oldState)

    switch (action.type) {
        case RECEIVE_SPOTS:
            return action.spots;

        case RECEIVE_SPOT:
            // console.log(action);
            // const { area, essential, amenity, detail, activity } = action;
            const newState = { [action.spot.id]: action.spot };
            // newState[action.spot.id].area = area;
            // newState[action.spot.id].essential = essential;
            // newState[action.spot.id].amenity = amenity;
            // newState[action.spot.id].detail = detail;
            // newState[action.spot.id].activity = activity;

            return Object.assign({}, oldState, newState);

        default:
            return oldState;
    }
};

export default spotsReducer;
