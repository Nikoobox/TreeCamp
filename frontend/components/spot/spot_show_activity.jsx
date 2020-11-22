import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiking, faFish } from '@fortawesome/free-solid-svg-icons';


class SpotShowActivity extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { title, description, price, location, country, rating, area, essential, amenity, detail, activity } = this.props.spot;

        const bikingIcon = <FontAwesomeIcon icon={faBiking} />
        const fishingIcon = <FontAwesomeIcon icon={faFish} />

        const bikingRend = activity.biking ? 
            <div className='box'>
                <div className='box-icon'> {bikingIcon} </div>
                <div className='box-title'> Biking </div>
            </div>
            : '';

        const fishingRend = activity.fishing ?
            <div className='box'>
                <div className='box-icon'> {fishingIcon} </div>
                <div className='box-title'> Fishing </div>
            </div>
            : '';

        return (
            <div className='activities-container'>
                <div className='title'>Activities</div>
                <div className='sub'>Offered on the Host's property or nearby.</div>
                <div className='boxes'>
                    {bikingRend}
                    {fishingRend}
                </div>
            </div>
        )
    }
}

export default SpotShowActivity