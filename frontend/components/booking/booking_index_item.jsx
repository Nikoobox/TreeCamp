import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit} from '@fortawesome/free-solid-svg-icons';

class BookingIndexItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render(){
        const{num, spots, deleteBooking, booking} = this.props;
        const faEditIcon = <FontAwesomeIcon icon={faEdit} />
        return(
            <div className='card-booked-item'>
                
                <div className="card-image">
                    <img src={`${spots[booking.spot_id].photoUrls[0]}`} alt=""/>
                </div>
                <div className="card-info-container">
                    <div className='booking-number'>{num}</div>
                    <div className="item-name">
                        <Link to={`/spots/${spots[booking.spot_id].id}`}>
                            {spots[booking.spot_id].title}
                        </Link>
                    </div>
                    <div className="item item-location">
                        {spots[booking.spot_id].location}, {spots[booking.spot_id].country}
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
                    
                    <div className='edit-booking-btn-container'>
                        <Link to={`/users/${booking.visitor_id}/bookings/${booking.id}/edit`} className='edit-booking-link'>
                            {faEditIcon} <span>Edit this booking </span>
                        </Link>
                    </div>
                    <div className='delete-booking-btn-container'>
                        <button onClick={()=>deleteBooking(booking.id)} className='delete-booking-btn'>Cancel Booking</button>
                    </div>
                </div>
            </div>
            )
        }
    }
    
    export default withRouter(BookingIndexItem);
