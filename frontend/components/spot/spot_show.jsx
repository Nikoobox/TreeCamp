import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import SpotShowCard from './spot_show_card';
import SpotShowDetail from './spot_show_detail';
import SpotShowActivity from './spot_show_activity';
import SpotBookingWidgetContainer from '../booking/spot_booking_widget_container';
import ReviewIndexContainer from '../review/review_index_container';
import SpotMap from '../spot_map/spot_map';

class SpotShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchSpot(this.props.match.params.spotId);
    }

    render() {
        if (!this.props.spot || !this.props.spot.area || !this.props.users){
            return null;
        }
        const {spot, users} = this.props;
        const host = users[spot.host_id];
    

        const { title, description, location, country, rating} = this.props.spot;
        const greaterIcon = <FontAwesomeIcon icon={faGreaterThan} />
        const thumbsUpIcon = <FontAwesomeIcon icon={faThumbsUp } />

        return (
            <>
            <div className='show-spot-container'>
                <div className='show-spot-images'>
                    <img src={`${spot.photoUrls[0]}`} className='img-1' />
                    <img src={`${spot.photoUrls[1]}`} className='img-2' />
                </div>
                
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
                    
                    <SpotBookingWidgetContainer spot={spot}/>
                </div>
                <SpotShowCard spot={spot}/>
                <SpotShowDetail spot={spot}/>
                <SpotShowActivity spot={spot} />
                <ReviewIndexContainer spot={spot} />
            </div>
            <SpotMap
                    users={users}
                    spot={spot}
                    spotId={spot.id}
                    // singleBench={true}
                    // fetchBench={fetchBench}
                />
            </>
        )
    }
}

export default withRouter(SpotShow);