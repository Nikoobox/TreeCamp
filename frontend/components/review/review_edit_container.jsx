import { connect } from 'react-redux';
import ReviewEdit from "./review_edit.jsx";
import { updateReview } from '../../actions/review_actions';
import { clearReviewErrors } from '../../actions/review_actions';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';

const mapState = (state) => {
    console.log('state from create review container: ', state)
    return {
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.reviews,
    }
}

const mapDisp = dispatch => {

    return {
        updateReview: (review) => dispatch(updateReview(review)),
        clearReviewErrors: () => dispatch(clearReviewErrors()),
        closeModal: () => dispatch(closeModal())
    }
}

export default withRouter(connect(mapState, mapDisp)(ReviewEdit));