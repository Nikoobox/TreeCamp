import React from 'react';
import { Link } from 'react-router-dom';
import ReviewCreateContainer from "./review_create_container.jsx";
import { withRouter } from 'react-router-dom';

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchReviews(this.props.spotId)
        .then(()=>{
            // this.props.fetchUsers()
        })
    }

    componentWillUnmount() {
    
    }

    render() {
        console.log('props from review_index: ', this.props)
        const {reviews} = this.props;
        let reviewsRend='';
        if (reviews.length !== 0){
            reviewsRend = reviews.map((review, idx) => {
               return   (<div className='review-box' key={idx}>
                            <div className='review'>
                                {review.title}
                                <br/>
                                {review.body}
                            </div>
                        </div>)
            })
        }
        return (
            <div className='review-index-container'>
                <h1>Hi from review index!</h1>
                {reviewsRend}
                <ReviewCreateContainer spot={this.props.spot}/>
            </div>
        )
    }
}

export default withRouter(ReviewIndex);