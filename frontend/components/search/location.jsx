import React, { createElement } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'nuka-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

class Location extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        // window.scrollTo(0, 0);
    }

    render() {
        // console.log('the props from location: ', this.props);
        const { title, price, location, country, rating, photoUrls } = this.props.spot; 
        return (
            
                <Link to={`/spots/${this.props.spot.id}`} className='spot-card'>
                    <div className='card-container'>
                        <div className='card-img'>
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

                        </div>
                    </div>
                </Link>
    
        )
    }
}

export default Location;