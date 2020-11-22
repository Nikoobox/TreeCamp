import React from 'react';
import { Link } from 'react-router-dom';


class SpotShowDetail extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { detail } = this.props.spot;
        // console.log(this.props);

        return (
            <div className='details-container'>
                <div className='details'>Details</div>
                <div className='details-cl cl-1'>
                    <div className='details-item'><span>Check in:</span> {detail.check_in}</div>
                    <div className='details-item'><span>Check out:</span> {detail.check_out}</div>
                    <div className='details-item'><span>Cancelation Policy:</span> {detail.cancelation_policy}</div>
                </div>
                <div className='details-cl cl-2'>
                    <div className='details-item'><span>On arrival:</span> {detail.on_arrival}</div>
                    <div className='details-item'><span>Minimum nights:</span> {detail.min_nights}</div>

                </div>
            </div>
        )
    }
}

export default SpotShowDetail