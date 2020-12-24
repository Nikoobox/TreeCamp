import { connect } from 'react-redux';
import ReviewCreate from "./review_create.jsx";
import { deleteReview, createReview } from '../../actions/review_actions';
import { clearReviewErrors } from '../../actions/review_actions';
import { withRouter } from 'react-router-dom';

const mapState = (state) => {
    // console.log('state from create review container: ', state)
    return {
        currentUser: state.entities.users[state.session.id],
        review: {
            title:'',
            body:'',
            rating: 0
            },
        errors: state.errors.reviews,
    }
}

const mapDisp = dispatch => {

    return {
        deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
        createReview: (review) => dispatch(createReview(review)),
        clearReviewErrors: () => dispatch(clearReviewErrors())
    }
}

export default withRouter(connect(mapState, mapDisp)(ReviewCreate));