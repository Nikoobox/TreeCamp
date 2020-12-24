import React from 'react';
import ReviewCreateContainer from "./review_create_container.jsx";
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);

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

    componentWillUnmount() {
    
    }

    render() {
        // console.log('props from review_index: ', this.props)
        const {reviews, deleteReview, currentUser, users, openModal} = this.props;
        const faEditIcon = <FontAwesomeIcon icon={faEdit} />

        let reviewsRend='';
        if (reviews.length !== 0){
            reviewsRend = reviews.map((review, idx) => {
                let buttonsCont='';

                const dateOptions = { month: "long", day: "numeric", year: "numeric" };
                const date = new Date(review.updated_at).toLocaleDateString("en-US", dateOptions); 
                
                let namesCont = <div className='user-name-box'>
                    <div className='name'>{users[review.author_id].first_name} </div>
                    <div className='name'>{users[review.author_id].last_name} </div>
                    <div className='review-created-date'>
                        {date}
                    </div>
                </div>

                if (currentUser && (review.author_id === currentUser.id)){
                    buttonsCont = 
                    <div className='buttons-box'>
                        <button onClick={() => deleteReview(review.id)} className='delete'>Delete</button>
                        <button onClick={() => openModal('edit-review', {
                            reviewId: review.id,
                            review: review
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