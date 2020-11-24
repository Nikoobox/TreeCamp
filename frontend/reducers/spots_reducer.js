import {RECEIVE_SPOTS, RECEIVE_SPOT} from '../actions/spot_actions';

const spotsReducer = (oldState = {}, action) => {

    Object.freeze(oldState)

    switch (action.type) {
        case RECEIVE_SPOTS:
            return action.spots;

        case RECEIVE_SPOT:
            const newState = { [action.spot.id]: action.spot };
            return Object.assign({}, oldState, newState);

        default:
            return oldState;
    }
};

export default spotsReducer;
