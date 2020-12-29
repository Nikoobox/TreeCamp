import React from 'react';
import ReviewCreateContainer from "./review_create_container.jsx";
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.updateRating = this.updateRating.bind(this);
    }

    componentDidMount() {
        this.props.fetchReviews(this.props.spotId)
        .then(()=>{
            this.props.fetchUsers()
            .then(()=>{
                console.log('users are fetched')
            })
        })
    }

    handleDelete(reviewId){
        this.props.deleteReview(reviewId)
            .then(()=>{
                this.updateRating();
            })
    }
//instead of fetching more reviews, use this.props.reviews values
    updateRating() {
        let newRating = 0
        let revSum = 0;
        this.props.fetchReviews(this.props.spot.id)
            .then((res) => {
                let revNum = Object.values(res.reviews).length;
                Object.values(res.reviews).forEach((review) => {
                    revSum += parseInt(review.rating);
                })
                newRating = (revSum / revNum).toFixed(1);
                const spotEdit = Object.assign({}, this.props.spot, { rating: newRating * 10 });
                this.props.updateSpot(spotEdit)
            })
    }

    render() {
        // console.log('props from review_index: ', this.props)
        const {reviews, deleteReview, currentUser, users, openModal} = this.props;
        const faEditIcon = <FontAwesomeIcon icon={faEdit} />
        const thumbsUpIcon = <FontAwesomeIcon icon={faThumbsUp} />

        let reviewsRend='';
        if (reviews.length !== 0){
            reviewsRend = reviews.map((review, idx) => {
                let buttonsCont='';

                const dateOptions = { month: "long", day: "numeric", year: "numeric" };
                const date = new Date(review.updated_at).toLocaleDateString("en-US", dateOptions); 
                
                let namesCont = <div className='user-name-box'>
                    <div className='thumb-up'>{thumbsUpIcon} </div>
                    <div className='name'>{users[review.author_id].first_name} </div>
                    <div className='name'>{users[review.author_id].last_name} </div>
                    <span>recommends this listing.</span>
                    <div className='review-created-date'>
                        {date}
                    </div>
                </div>

                if (currentUser && (review.author_id === currentUser.id)){
                    buttonsCont = 
                    <div className='buttons-box'>
                        <button onClick={()=>this.handleDelete(review.id)} className='delete'>Delete</button>
                        {/* <button onClick={() => deleteReview(review.id)} className='delete'>Delete</button> */}
                        <button onClick={() => openModal('edit-review', {
                            reviewId: review.id,
                            review: review,
                            spotId: this.props.spotId,
                            spot: this.props.spot
                            })} className='edit'>
                            {faEditIcon} <span>Edit Review </span>
                        </button>

                        
                    </div>
                }
               return   (<div className='review-box' key={idx}>
                            <div className='img-box'>
                                <img src={`${tree_camp_logo}`} alt="" />
                            </div>
                            <div className='review'>
                                {namesCont}
                                <div className='sub'>
                                    <div className='title'>
                                        {review.title}
                                    </div>
                                    <div className='body'>
                                        {review.body}
                                    </div>
                                    {/* <div className='rating'>
                                        {review.rating*10}%
                                    </div> */}
                                </div>
                                {buttonsCont}
                            </div>
                        </div>)
            })
        }

        const createCont = this.props.currentUser ? 
        <ReviewCreateContainer spot={this.props.spot} /> : '';

        const reviewsNum = reviews.length === 1  ? ' Review' : ' Reviews';

        return (
            <div className='review-index-container'>
                <div className='reviews-total-count'>
                    {reviews.length}
                    {reviewsNum}
                </div>
                {reviewsRend}
                {createCont}
            </div>
        )
    }
}

export default withRouter(ReviewIndex);