import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'nuka-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

class SpotIndexCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, price, location, country, rating, photoUrls} = this.props.spot; 
        // console.log(photoUrls[0])
        return (
                <Link to={`/spots/${this.props.spot.id}`} className='spot-index-card'>
                    <div className='card-container'>
                        <div className='card-img'>
                            {/* <img src={`${photoUrls[0]}`} alt="" /> */}

                            <Carousel
                                defaultControlsConfig={{
                                    nextButtonText: '>',
                                    prevButtonText: '<'
                                }} wrapAround={true}
                            >
                                <img src={`${photoUrls[0]}`} />
                                <img src={`${photoUrls[1]}`} />
                            </Carousel>
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

                            {/* <Link to={`/spots/${this.props.spot.id}`}>Show more</Link> */}
                        </div>
                    </div>
                   
                </Link>

                )
        }
}

export default SpotIndexCard;