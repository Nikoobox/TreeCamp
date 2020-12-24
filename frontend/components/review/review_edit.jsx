import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.info.review;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

    }
    componentWillUnmount() {
        this.props.clearReviewErrors()
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({created_at: this.state.updated_at})
        this.props.updateReview(this.state)
            .then(() => {
                this.props.closeModal()
            })

    }

    update(field) {
        return (e) => {
            this.setState({
                [field]: e.currentTarget.value
            })
        }
    }

    render() {
        // console.log('props from review_edit: ', this.props);
        console.log('state from review_edit: ', this.state)
        const { errors } = this.props;
        return (
            <div className='review-edit-container'>
                
                <div className='header'>
                    Edit Your Review:
                    <div className='close' onClick={() => this.props.closeModal()}>&times;</div>
                </div>

                <form onSubmit={this.handleSubmit} className='review-form'>
                    <input
                        className='section'
                        placeholder='Review title'
                        type="text"
                        name='title'
                        value={this.state.title}
                        onChange={this.update('title')} />

                    <textarea
                        className='section'
                        placeholder='Please describe your experience'
                        type="text"
                        name='body'
                        rows="5"
                        value={this.state.body}
                        onChange={this.update('body')} />
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
                        onChange={this.update('rating')} />
                    <div className='errors-box'>
                        {errors.map((er, idx) => {
                            return <div className='errors' key={idx}>{er}</div>;
                        })}
                    </div>
                    <button>Submit Changes</button>
                </form>

            </div>
        )
    }
}

export default withRouter(ReviewEdit);