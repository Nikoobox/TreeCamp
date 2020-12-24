import { connect } from 'react-redux';
import ReviewIndex from "./review_index.jsx";
import { fetchReviews, deleteReview, createReview } from '../../actions/review_actions';
import { fetchUsers} from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';

const mapState = (state, ownProps) => {

// console.log('from review index container: ', state)
    return {
        spotId: ownProps.spot.id,
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users,
        reviews: Object.values(state.entities.reviews)
    }
}

const mapDisp = dispatch => {

    return {
        fetchUsers: () => dispatch(fetchUsers()),
        fetchReviews: (spotId) => dispatch(fetchReviews(spotId)),
        deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
        createReview: (review) => dispatch(createReview(review)),
        openModal: (modal, info) => dispatch(openModal(modal, info))
    }
}

export default connect(mapState, mapDisp)(ReviewIndex);