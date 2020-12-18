
import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import DayPickerInput from 'react-day-picker/DayPickerInput';

class BookingEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.booking
        console.log('this is state', this.state)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (input) => {
            this.setState({ [field]: input })
        }
    }

    componentDidMount(){

        this.props.fetchBooking(this.props.match.params.bookingId).then((res) => {

            this.setState({
                checkin_date: this.props.booking.checkin_date,
                checkout_date: this.props.booking.checkout_date,
                id: this.props.booking.id,
                num_visitors: this.props.booking.num_visitors,
                spot_id: this.props.booking.spot_id,
                total_cost: this.props.booking.total_cost,
                visitor_id: this.props.booking.visitor_id,
                max_visitors: this.props.booking.max_visitors
            })
        })
        .then(()=>{
            if(this.state !== null){
                this.props.fetchSpot(this.state.spot_id).then((res)=>{
                    // console.log('this is res from fetchSpot', res.spot.photoUrls[0]);
                    const imgs = res.spot.photoUrls;
                    const spotDiv = document.getElementById('spot-box');
                   console.log(res.spot)
                    spotDiv.innerHTML = 
                    `
                    <div class='spot-img'>
                        <img src=${imgs[0]}/>
                    </div>
                    `;
                    
                    const spotName = document.getElementById('spot-name');
                    spotName.innerHTML = `${res.spot.title}`;
                })
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const date1 = new Date(this.state.checkin_date);
        const date2 = new Date(this.state.checkout_date);
        if(date2<=date1){
            const err = document.getElementById('errors');
            err.innerText=
            "Incorrect checkout date. Try again";

            return null;
        }else{

            const numDays = Math.ceil((Math.abs(date2 - date1)) / (1000 * 60 * 60 * 24));
            const costPerNight = this.props.booking.price_per_night;
    
            const newBooking = Object.assign({}, this.state, { total_cost: costPerNight * numDays });
            
            this.props.updateBooking(newBooking).then(() => {
                this.props.history.push(`/users/${this.props.currentUser.id}/bookings`);
            })
        }
    }
    handleVisitors(operation) {
        if (!this.props.booking) {
            return null;
        }

        return () => {
            if (operation === '-' && this.state.num_visitors > 1) {
                this.setState({ num_visitors: this.state.num_visitors - 1 })
            }
            if (operation === '+' && this.state.num_visitors < this.state.max_visitors) {
                this.setState({ num_visitors: this.state.num_visitors + 1 })
            }
        }
    }

    render() {
        if (!this.props.booking || (this.state === null)) {
            return null;
        } 
        return (
            <div className='edit-booking-container'>
                <div className='card'>
                    <div id='spot-box'>

                    </div>
                    <div className='edit-booking-box'>
                        <div className='edit-form-container'>
                            <div id='spot-name'></div>
                            <div className='form-title'>Edit Your Booking</div>
                            <div className='form-content'>
                                <form onSubmit={this.handleSubmit}>
                                    <div className='date-box'>
                                        <div className='label'>
                                            Checkin Date:
                                        </div>
                                        <DayPickerInput
                                            value={this.state.checkin_date}
                                            // placeholder={this.state.checkin_date}
                                            onDayChange={this.update('checkin_date')}
                                            selectedDay={this.state.checkin_date}
                                            dayPickerProps={{
                                                disabledDays: { before: new Date() }
                                            }}
                                        />

                                    </div>
                                    <div className='date-box'>
                                        <div className='label'>
                                            Checkout Date:
                                        </div>
                                    <DayPickerInput
                                        value={this.state.checkout_date}
                                        // placeholder={this.state.checkout_date}
                                        onDayChange={this.update('checkout_date')}
                                        // selectedDay={this.state.checkout_date}
                                        // dayPickerProps={{
                                        //     disabledDays: { before: this.state.checkin_date }
                                        // }}     
                                    />
                                    </div>

                                    <div className='guests'>
                                        <div className='guests-title'>Select Guests:</div>
                                        <div className='guests-adjustment'>
                                            <div className='guests-minus box' onClick={this.handleVisitors('-')}> - </div>
                                            <div className='total box'> {this.state.num_visitors} </div>
                                            
                                            <div className='guests-plus box' onClick={this.handleVisitors('+')}> + </div>
                                        </div>
                                    </div>

                                    <div id='errors'>
                                    </div>

                                    <button className='edit-btn'>Edit booking</button>
                                </form>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default withRouter(BookingEdit);