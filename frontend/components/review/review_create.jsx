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

    handleSubmit(e){
        e.preventDefault();
        
        this.props.createReview(this.state)
            .then(()=>{
                debugger
                this.props.history.push(`/spots/${this.state.spot_id}`)
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
                <h3>Hi from review create!</h3>
                <form onSubmit={this.handleSubmit} className='review-form'>
                    <label>Title</label>
                    <input 
                        type="text" 
                        name='title'
                        value={this.state.title}
                        onChange={this.update('title')}
                        />
                    <br/>
                    <label>Body</label>
                    <textarea
                        type="text"  
                        name='body'
                        value={this.state.body}
                        onChange={this.update('body')}
                    />
                    <br />
                    <label>Rating (1-10)</label>
                    <input 
                        type="number"
                        name='rating'
                        value={this.state.rating}
                        onChange={this.update('rating')}
                    />
                    <br/>
                    <button>Add Review</button>
                </form>
            </div>
        )
    }
}

export default withRouter(ReviewCreate);