import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import SpotShowCard from './spot_show_card';
import SpotShowDetail from './spot_show_detail';
import SpotShowActivity from './spot_show_activity';
import SpotShowBookingWidget from './spot_show_booking_widget';

class SpotShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchSpot(this.props.match.params.spotId);
        this.props.fetchUsers();
    }

    render() {
        // console.log(this.props)
        if (!this.props.spot || !this.props.spot.area || !this.props.users) return null;

        const {spot, users} = this.props;
        const host = users[spot.host_id];
    
        const { title, description, location, country, rating} = this.props.spot;
        const greaterIcon = <FontAwesomeIcon icon={faGreaterThan} />
        const thumbsUpIcon = <FontAwesomeIcon icon={faThumbsUp } />

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
                                <div className='host-info-container'>
                                    <div className='hosted-by'>Hosted by</div>
                                    <div className='host-name'>{host.first_name} {host.last_name}</div>
                                </div>
                            </div>
                            <div className='description'>
                                {description}
                            </div>
                        </div>

                    </div>

                    <SpotShowBookingWidget spot={spot}/>
                   
                </div>
                <SpotShowCard spot={spot}/>
                <SpotShowDetail spot={spot}/>
                <SpotShowActivity spot={spot} />
                
            </div>
        )
    }
}

export default SpotShow;