import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

class SpotIndexCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log(this.props)
        // const { posts } = this.props;
        const { title, description, price, location, country, rating, latitude, longitude } = this.props.spot;

        return <div className='spot-index-card'>
                <div className='card-img'>
                    <img src={window.tree_hotel_sweden} className='' />
                </div>

                <div className='card-data'>
                    <div className='card-header'>
                        <div className='card-header-title'>
                            {title}
                        </div>
                        <div className='card-header-location'>
                            {country} {location}
                        </div>
                    </div>

                    <div className='card-footer'>
                        <div className='card-footer-rating'>
                        <FontAwesomeIcon icon={faThumbsUp} /> {rating}%
                        </div>
                        <div className='card-footer-price'>
                         ${price}/night
                        </div>
                    </div>

                </div>

            </div>
    }
}

export default SpotIndexCard;