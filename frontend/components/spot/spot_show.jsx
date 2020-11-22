import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import SpotShowCard from './spot_show_card';
import SpotShowDetail from './spot_show_detail';
import SpotShowActivity from './spot_show_activity';

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
        const { title, description, price, location, country, rating, area, essential, amenity, detail, activity} = this.props.spot;
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
                <SpotShowCard spot={spot}/>
                
                <SpotShowDetail spot={spot}/>

                <SpotShowActivity spot={spot} />
                {/* <div className='activities-container'>
                    <div className='title'>Activities</div>
                    <div className='sub'>Offered on the Host's property or nearby.</div>
                    <div className='boxes-container'>
                        <div className='box'>
                            <div className='box-icon'>

                            </div>
                            <div className='box-title'>

                            </div>
                        </div>
                    </div>
                </div> */}
                
            </div>
        )
    }
}

export default SpotShow;