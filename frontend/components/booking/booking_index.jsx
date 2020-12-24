import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import BookingIndexItem from './booking_index_item';

class BookingIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchBookings().then(()=>{
            this.props.fetchSpots().then(()=>{
                console.log('spots are fetched');
            })
        });
    }

    render() {
    // console.log(this.props);
        // if ((Object.keys(this.props.spots).length === 0) || (this.props.bookings.length === 0)) {
        //     return null;
        // } 
        const { currentUser, spots, bookings, deleteBooking} = this.props;

        return (
            <div className='booking-index-container'>
                <div className='left-column'>
                    <div className='user-info'>
                        <div className='user-info-container'>
                            <div className='sub'>User Info:</div>
                            <div className='user-name'>{currentUser.first_name} {currentUser.last_name}</div>
                        </div>
                    </div>
                    <div className='user-num-of-bookings'>
                        {bookings.length === 0 ? '' : 'Congrats! '} 
                        You have {bookings.length} {bookings.length === 1 ? 'trip' : 'trips'} coming up!
                    </div>
                </div>
                <div className='right-column'>
                    <div className='right-column-message'>
                        {bookings.length === 0 ? 
                        <div className='right-column-message-0'>
                            <div>You have no upcoming trips. Discover the most unique tree houses in a world!</div>
                            <div className='discover-btn-container'>
                                <Link to={'/'}><button className='discover-btn'>Discover</button></Link> 
                            </div>
                        </div> : 
                        <div className='right-column-message'>Upcoming trips:</div>
                        }
                    </div>
                    
                    <div className='booked-items'>
                        {bookings.map((booking, idx) => {
                            return <BookingIndexItem spots={spots} booking={booking} deleteBooking={deleteBooking} key={idx} num={idx + 1} />
                        })}
                        {bookings.length !== 0 ? 
                         <div className='discover-btn-container'>
                             <Link to={'/'}><button className='discover-btn'>Discover</button></Link> 
                        </div>
                        : '' }
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(BookingIndex);