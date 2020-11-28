import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

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

    componentWillUnmount() {
        this.props.clearBookingErrors();
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }


    handleSubmit(e) {
        e.preventDefault();
        if(this.props.currentUser){
            this.props.clearBookingErrors()
            const checkin = this.state.checkin_date;
            const checkout = this.state.checkout_date;
            const date1 = new Date(checkin);
            const date2 = new Date(checkout);
            const diffTime = Math.abs(date2 - date1);
            const numDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            const costPerNight = this.props.spot.price;
            const totalCost = costPerNight * numDays;
           
            const newBooking = Object.assign({}, this.state, 
                { total_cost: totalCost});

            this.props.createBooking(newBooking);
            if (checkin !== undefined && checkout !== undefined){
                this.props.clearBookingErrors()
                
                this.props.history.push(`/users/${this.props.currentUserId}/bookings`);
                
            }

        } else{
            this.props.clearBookingErrors()
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
        const { errors } = this.props;
       
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
                                // value={this.state.checkin_date}
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
                <div className='booking-widget-errors'>
                    {errors.map((er, idx) => {
                        return <div className='errors' key={idx}>{er}</div>;
                    })}
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



 // this.setState({
            //     total_cost: totalCost,
            // }, () => {
            //         this.props.createBooking(this.state)
            //         // .then(this.props.history.push(`/users/${this.props.currentUserId}/bookings`))
            //         //  this.props.history.push(`/users/${this.props.currentUserId}/bookings`)
            // }).then(this.props.history.push(`/users/${this.props.currentUserId}/bookings`));