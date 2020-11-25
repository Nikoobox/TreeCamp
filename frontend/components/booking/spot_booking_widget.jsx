import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class SpotBookingWidget extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checkin_date: undefined,
            checkout_date: undefined,
            num_visitors: 1,
            total_cost: 0,
            spot_id: this.props.spot.id,
            visitor_id: this.props.currentUserId
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.props.currentUser){
            const checkin = this.state.checkin_date;
            const checkout = this.state.checkout_date;
            const date1 = new Date(checkin);
            const date2 = new Date(checkout);
            const diffTime = Math.abs(date2 - date1);
            const numDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            const costPerNight = this.props.spot.price;

            const totalCost = costPerNight * numDays;
            // this.setState({ total_cost: totalCost });

            this.setState({
                total_cost: totalCost,
            }, () => {
                this.props.createBooking(this.state);
                this.props.history.push(`/users/${this.props.currentUserId}/bookings`)
            });
        }else{
            this.props.openModal('signup')
        }
    }
  
    handleVisitors(operation){
        const max_visitors = this.props.spot.area.max_guests; 
        return () => {
            if(operation === '-' && this.state.num_visitors>1){
                this.setState({num_visitors: this.state.num_visitors - 1})
            }
            if (operation === '+' && this.state.num_visitors <= max_visitors){
                this.setState({ num_visitors: this.state.num_visitors + 1 })
            }
        }
    }

    render() {
        const{ price } =this.props.spot;
       
        return (
            <form className='booking-widget' onSubmit={this.handleSubmit}>
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
                        <div className='guest-selection'>
                            <div className='guest-num' onClick={this.handleVisitors('-')}> - </div> 
                                {this.state.num_visitors} 
                            <div className='guest-num' onClick={this.handleVisitors('+')}> + </div> 
                        </div>
                    </div>

                </div>
                <div className='button-container'>
                    {/* <Link to={`/users/${this.props.currentUserId}/bookings`}> */}
                        <button> Instant book </button>
                    {/* </Link> */}
                </div>
            </form>
        )
    }
}

export default withRouter(SpotBookingWidget);