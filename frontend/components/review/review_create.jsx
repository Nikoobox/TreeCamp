import React from 'react';
import { Link } from 'react-router-dom';
// import ReviewCreate from "./review_create.jsx";
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
    }

    componentDidMount() {
       
    }
    componentWillUnmount() {

    }

    handleSubmit(e){
        e.preventDefault();
        const spotId = this.state.spot_id
        this.props.createReview(this.state)
            .then(() => {
                this.setState({
                    title: '',
                    body: '',
                    rating: 0
                })
            })
            .then(()=>{
                debugger
                this.props.history.push(`/spots/${spotId}`)
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
        console.log('props from review_create: ', this.props)

        return (
            <div className='review-create-container'>
                <div className='header'>Write Review</div>
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
                   
                        <input
                            className='section' 
                            placeholder='rating' 
                            type="number"
                            name='rating'
                            value={this.state.rating}
                            onChange={this.update('rating')}/>
                    
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default withRouter(ReviewCreate);