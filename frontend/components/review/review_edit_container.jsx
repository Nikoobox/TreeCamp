import { connect } from 'react-redux';
import ReviewEdit from "./review_edit.jsx";
import { updateReview, fetchReviews } from '../../actions/review_actions';
import { clearReviewErrors } from '../../actions/review_actions';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { updateSpot } from '../../actions/spot_actions';

const mapState = (state) => {
    console.log('state from EDIT review container: ', state)
    return {
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.reviews
    }
}

const mapDisp = dispatch => {

    return {
        updateReview: (review) => dispatch(updateReview(review)),
        fetchReviews: (spotId) => dispatch(fetchReviews(spotId)),
        clearReviewErrors: () => dispatch(clearReviewErrors()),
        closeModal: () => dispatch(closeModal()),
        updateSpot: (spot) => dispatch(updateSpot(spot))
    }
}

export default withRouter(connect(mapState, mapDisp)(ReviewEdit));