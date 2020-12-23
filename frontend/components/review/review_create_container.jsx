import { connect } from 'react-redux';
import ReviewCreate from "./review_create.jsx";
import { deleteReview, createReview } from '../../actions/review_actions';
// import { fetchUsers } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';

const mapState = (state) => {
    console.log('state from create review container: ', state)
    return {
        // spotId: ownProps.match.params.spotId,
        currentUser: state.entities.users[state.session.id],
        review: {
            title:'',
            body:'',
            rating: 0
            }
        // users: state.entities.users,
        // reviews: state.entities.reviews
        // reviews: Object.values(state.entities.spot),
        // userId: ownProps.match.params.userId
    }
}

const mapDisp = dispatch => {

    return {
        deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
        createReview: (review) => dispatch(createReview(review)),
    }
}

export default withRouter(connect(mapState, mapDisp)(ReviewCreate));