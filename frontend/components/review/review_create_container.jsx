import { connect } from 'react-redux';
import ReviewCreate from "./review_create.jsx";
import { deleteReview, createReview, fetchReviews } from '../../actions/review_actions';
import { clearReviewErrors } from '../../actions/review_actions';
import { withRouter } from 'react-router-dom';
import { updateSpot  } from '../../actions/spot_actions';

const mapState = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        review: {
            title:'',
            body:'',
            rating: 0
            },
        errors: state.errors.reviews,
        spot: state.entities.spots[ownProps.match.params.spotId],
    }
}

const mapDisp = dispatch => {
    return {
        deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
        createReview: (review) => dispatch(createReview(review)),
        fetchReviews: (spotId) => dispatch(fetchReviews(spotId)),
        clearReviewErrors: () => dispatch(clearReviewErrors()),
        updateSpot: (spot) => dispatch(updateSpot(spot))
    }
}

export default withRouter(connect(mapState, mapDisp)(ReviewCreate));