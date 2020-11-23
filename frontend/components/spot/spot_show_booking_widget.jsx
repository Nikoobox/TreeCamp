import React from 'react';
import { Link } from 'react-router-dom';
// import DayPickerInput from 'react-day-picker/DayPickerInput';

class SpotShowBookingWidget extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { price } = this.props.spot;

        return (
            <div className='booking-widget'>
                <div className='price-container'>
                    <div className='price'>${price}</div>
                    <span>per night</span>
                </div>

                <div className='row'>
                    <div className='check-container'>
                        <div className='check'>Check in</div>
                        <div className='check-in-date'>
                            <input type='date' placeholder='Select date' />
                        </div>
                    </div>

                    <div className='check-container'>
                        <div className='check'>Check out</div>
                        <div className='check-out-date'>
                            <input placeholder='Select date' />
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
            </div>
        )
    }
}

export default SpotShowBookingWidget