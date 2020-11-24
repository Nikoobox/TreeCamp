import React from 'react';
import { Link } from 'react-router-dom';

class SpotBookingWidget extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checkin_date: undefined,
            checkout_date: undefined,
            num_visitors: 0,
            total_cost: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        console.log(field)
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        
        console.log(this.state)
        this.props.processForm(user);
    }

    render() {
        console.log(this.state);
        console.log(this.props);

        const {createBooking} = this.props;
        const{price} =this.props.spot;

        return (
            <form className='booking-widget' onSubmit={()=>createBooking(this.state)}>
                <div className='price-container'>
                    <div className='price'>${price}</div>
                    <span>per night</span>
                </div>

                <div className='row'>
                    <div className='check-container'>
                        <div className='check'>Check in</div>
                        <div className='check-in-date'>
                            <input type='date' 
                                placeholder='Select date' 
                                onChange={this.update('checkin_date')}
                            />
                        </div>
                    </div>

                    <div className='check-container'>
                        <div className='check'>Check out</div>
                        <div className='check-out-date'>
                            <input type='date'
                                placeholder='Select date'
                                onChange={this.update('checkout_date')}
                            />
                        </div>
                    </div>

                    <div className='guests-container'>
                        <div className='guests'>Guests</div>
                        <div className='guest-selection'>- 2 +</div>
                    </div>

                </div>
                <div className='button-container'>
                    <button>Instant book</button>
                </div>
            </form>
        )
    }
}

export default SpotBookingWidget