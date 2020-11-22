import React from 'react';
import { Link } from 'react-router-dom';


class SpotShowBookingWidget extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { price } = this.props.spot;

        // const bugsIcon = <FontAwesomeIcon icon={faSprayCan} />


        return (
            <div className='booking-widget'>
                <div className='price-container'>
                    <div className='price'>${price}</div>
                    <span>per night</span>
                </div>

                <div className='row'>
                    <div className='check-in-container'>
                        <div className='check-in'>Check in</div>
                        <span>Select date</span>
                    </div>

                    <div className='check-out-container'>
                        <div className='check-out'>Check out</div>
                        <span>Select date</span>
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