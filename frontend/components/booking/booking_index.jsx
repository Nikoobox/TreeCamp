import React from 'react';
import { Link } from 'react-router-dom';
import BookingIndexItem from './booking_index_item';

class BookingIndex extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount(){
        this.props.fetchSpots();
        this.props.fetchBookings();
    }


    render() {
        console.log(this.props);
        console.log(`spots: ${this.props.spots}`);
        console.log(`bookings: ${this.props.bookings.length}`);
        if (this.props.bookings.length === 0 || Object.keys(this.props.spots).length === 0) return null;
        
        const { currentUser, spots, bookings, fetchBookings, fetchBooking, deleteBooking, fetchSpot, fetchSpots} = this.props;

        const rendIndexItems = bookings.map((booking, idx)=>{
            return <BookingIndexItem spots={spots} booking={booking} deleteBooking={deleteBooking} key={idx} num={idx+1}/>
        })

        return (
            <div className='booking-index-container'>
                <div className='left-column'>
                    <div className='user-info'>
                        <div className='user-info-container'>
                            <div className='sub'>User Info</div>
                            <div className='user-name'>{currentUser.first_name} {currentUser.last_name}</div>
                        </div>
                    </div>
                    <div className='user-num-of-bookings'>
                        Congrats! You have {bookings.length} bookings coming up!
                    </div>
                </div>
                <div className='right-column'>
                    <div className='right-column-title'>Your upcoming bookings...</div>

                    <div className='booked-items'>
                        {rendIndexItems}
                    </div>
                </div>
            </div>
        )
    }
}

export default BookingIndex;