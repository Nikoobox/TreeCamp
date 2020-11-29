import { faDivide } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class BookingEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.booking
        this.handleSubmit = this.handleSubmit.bind(this);
        // console.log(this.props);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    componentDidMount(){
        this.props.fetchSpots();
        this.props.fetchBooking(this.props.match.params.bookingId);
    }

    handleSubmit(e) {
        e.preventDefault();
        const date1 = new Date(this.state.checkin_date);
        const date2 = new Date(this.state.checkout_date);
        const numDays = Math.ceil((Math.abs(date2 - date1)) / (1000 * 60 * 60 * 24));
        const costPerNight = this.props.spot.price;
        const newBooking = Object.assign({}, this.state, { total_cost: costPerNight * numDays });
        console.log(newBooking)
        this.props.updateBooking(newBooking);
        // this.props.history.push(`/users/${this.props.currentUser.id}/bookings`);
        // const{history} = this.props;

        // history.push

    }

    render() {
        if (Object.keys(this.props.spots).length === 0 || !this.props.booking) {
            return null;
        } 
        console.log(this.props)
        const {booking, spots, updateBooking} =this.props;

        const{checkin_date, checkout_date, num_visitors,spot_id, total_cost, visitor_id}=this.props.booking;

        const{id,title,description, country, location,price, rating}=this.props.spots[booking.spot_id]
        const { spot } = this.props.spots[booking.spot_id]

        // console.log(this.props.spots[booking.spot_id])
        console.log(this.state)
        return (
          <div className='edit-booking-container'>
              <div className='edit-form-container'>
                    <div className='form-title'>Edit page</div>
                    <div className='form-content'>
                        <form onSubmit={()=>updateBooking(this.state.booking)}>
                            <input type='date'
                                placeholder='Select date'
                                onChange={this.update('checkin_date')}
                                value={this.state.checkin_date}
                                name='checkin_date'
                            />
                            <br/>
                            <input type='date'
                                placeholder='Select date'
                                onChange={this.update('checkout_date')}
                                value={this.state.checkout_date}
                                name='checkout_date'
                            />
                            <br/>
                            {/* <div className='guests'>
                                <div className='guests-title'>Guests</div>
                                <div className='guests-adjustment'>
                                    <div className='guests-minus' onClick={this.handleVisitors('-')}> - </div>
                                    {this.state.num_visitors}
                                    <div className='guests-plus' onClick={this.handleVisitors('+')}> + </div>
                                </div>
                            </div> */}
                            <br/>
                            <div>Total cost: {total_cost}</div>
                            <br />
                            <button>Edit booking</button>
                        </form>
                    </div>

              </div>
          </div>
        )
    }
}

export default withRouter(BookingEdit);