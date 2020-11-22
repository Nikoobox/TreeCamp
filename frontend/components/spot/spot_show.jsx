import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAltV, faFire, faWheelchair, faUser, faMapMarkerAlt, faGreaterThan, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

class SpotShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchSpot(this.props.match.params.spotId)
    }

    render() {
        if (!this.props.spot || !this.props.spot.area) return null;
        
        const {spot} = this.props;
        const { title, description, price, location, country, rating, area, essential, amenity, detail} = this.props.spot;
        const greaterIcon = <FontAwesomeIcon icon={faGreaterThan} />
        const thumbsUpIcon = <FontAwesomeIcon icon={faThumbsUp } />
        const mapMarkerAlt = <FontAwesomeIcon icon={faMapMarkerAlt} />
        const userIcon = <FontAwesomeIcon icon={faUser} />
        const wheelChairIcon = <FontAwesomeIcon icon={faWheelchair} />
        const campfireIcon = <FontAwesomeIcon icon={faFire} />
        const elevatorIcon = <FontAwesomeIcon icon={faArrowsAltV} />

        return (
            <div className='show-spot-container'>
                <img src={window.tree_hotel_sweden} className='container-img' />
            
                <div className='content'>
                    <div className='content-data'>
                        <div className='container-location'>
                            {country} &nbsp; <span> {greaterIcon} </span> &nbsp; {location}
                        </div>

                        <div className='container-title'>
                            {title}
                        </div>

                        <div className='container-rating'>
                            <span>{thumbsUpIcon} {rating}%</span> Recommend
                        </div>

                        <div className='container-host-description'>
                            <div className='host-info'>
                                add host name
                            </div>
                            <div className='description'>
                                {description}
                            </div>
                        </div>

                    </div>

                    <div className='booking-widget'>
                        bookingwidget comes here
                    </div>

                </div>

                <div className='cards-container'>
                    <div className='cards cards-area'>
                        <div className='cards-name'>Lodging provided</div>
                        <div className='item-container'>
                            <div className='item-icon'>
                                {mapMarkerAlt}
                            </div>
                            <div className='item-info'>
                                {area.num_sites} {area.num_sites === 1 ? 'site' : 'sites'}
                            </div>
                        </div>
                        <div className='item-container'>
                            <div className='item-icon'>
                                {userIcon}
                            </div>
                            <div className='item-info'>
                                Up to {area.max_guests} guests per site
                            </div>
                        </div>
                        <div className='item-container'>
                            <div className='item-icon'>
                                {wheelChairIcon}
                            </div>
                            <div className='item-info'>
                                { area.ada_access ? '' : 'No'} ADA access
                            </div>
                        </div>
                    </div>

                    <div className='cards cards-essentials'>
                        <div className='cards-name'>Essentials</div>
                        <div className='item-container'>
                            <div className='item-icon'>
                                {campfireIcon}
                            </div>
                            <div className='item-info'>
                                {essential.campfire ? 'Campfires allowed' : 'Campfires not allowed'}
                            </div>
                        </div>
                        <div className='item-container'>
                            <div className='item-icon'>
                                {elevatorIcon}
                            </div>
                            <div className='item-info'>
                                {essential.elevator ? 'Elevator available' : 'Elevator is not allowed'}
                            </div>
                        </div>
                        <div className='item-container'>
                            <div className='item-icon'>
                                
                            </div>
                            <div className='item-info'>
                                
                            </div>
                        </div>
                    </div>
                    
                    <div className='cards cards-amenities'>
                        Amenities
                    </div>

                </div>


                <br/>
                <Link to='/'>to Splash Page</Link>
            </div>
        )
    }
}

export default SpotShow;