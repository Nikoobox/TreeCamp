import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            title: this.props.review.title,
            body: this.props.review.body,
            spot_id: this.props.spot.id,
            author_id: this.props.currentUser.id,
            rating: this.props.review.rating
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateRating = this.updateRating.bind(this);
    }

    componentWillUnmount() {
        this.props.clearReviewErrors()
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createReview(this.state)
            .then(() => {
                this.setState({
                    title: '',
                    body: '',
                    rating: 0
                })
            }).then(()=>{
                this.updateRating();
            })
    }

    updateRating(){
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

    update(field){
        return (e)=>{
            this.setState({
                [field]:e.currentTarget.value
            })
        }
    }

    render() {
        // console.log('props from review_create: ', this.props)
        return (
            <div className='review-create-container'>
                <div className='header'>Write a Review:</div>

                <form onSubmit={this.handleSubmit} className='review-form'>
                        <input
                            className='section' 
                            placeholder='Review title' 
                            type="text" 
                            name='title'
                            value={this.state.title}
                            onChange={this.update('title')}/>

                        <textarea
                            className='section' 
                            placeholder='Please describe your experience' 
                            type="text"  
                            name='body'
                            rows="5"   
                            value={this.state.body}
                            onChange={this.update('body')}/>

                        <label className='rating-header'>
                            Rate your experience (1-10):
                        </label>
                        <input
                        className='section'
                            placeholder='rating' 
                            type="number"
                            name='rating'
                            min='1'
                            max='10'
                            value={this.state.rating}
                            onChange={this.update('rating')}/>

                        <div className='errors-box'>
                        {this.props.errors.map((er, idx) => {
                            return <div className='errors' key={idx}>{er}</div>;
                        })}
                        </div>
                        
                    <button>Submit</button>
                </form>

            </div>
        )
    }
}

export default withRouter(ReviewCreate);