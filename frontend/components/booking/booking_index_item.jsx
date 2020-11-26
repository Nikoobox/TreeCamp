import React from 'react';
import { Link } from 'react-router-dom';

class BookingIndexItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render(){
        const{num, spots, deleteBooking, booking} = this.props;
      
        return(
            <div className='card-booked-item'>
                <span>{num}</span>
                <div className="card-image">
                    <img src={`${spots[booking.spot_id].photoUrls[0]}`} alt=""/>
                    
                </div>
                <div className="card-info-container">
                    <div className="item-name">
                        {spots[booking.spot_id].title}
                    </div>
                    <div className="item">
                        <span>Check-in date:</span> {booking.checkin_date}
                    </div>
                    <div className="item">
                        <span>Check-out date:</span> {booking.checkout_date}
                    </div>
                    <div className="item">
                        <span>Number of visitors: </span>{booking.num_visitors}
                    </div>
                    <div className="item">
                        <span>Total cost: $</span>{booking.total_cost}
                    </div>
                    <div className='delete-booking-btn-container'>
                        <button onClick={()=>deleteBooking(booking.id)} className='delete-booking-btn'>Cancel Booking</button>
                    </div>
                </div>
            </div>
            )
        }
    }
    
    export default BookingIndexItem;
