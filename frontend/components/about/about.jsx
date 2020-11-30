import React from 'react';
import { Link } from 'react-router-dom';


class About extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {


        return (
            <div className='about'>
                <div className='about-img-cont-1'><img src={`${arrow_down}`}/></div>
                <div className='about-container' id='about-section'>
                   <div className="about-title">About</div>
                    <div className='description'>
                        <div className='description-sub'>
                            Tree Camp is a booking platform for unique accomodations. Rent one of the thousands unique tree houses all over the world. Ranging from pet-friendly hotels or eco-friendly hotels, glamping retreats and getaways. With inventory perfect for family vacations, romantic getaways, and near top solo travel destinations, Tree Camp is where to book. It is time to elevate yourself! 
                        </div>
                        <div className="description-sub">
                            Become a host, meet nature enthusiasts and support sustainable tourism. Connect with fellow landowners and share your experience.
                        </div>
                        <div className='description-sub last'>

                            Tree Camp was inspiried by Hipcamp website, that offers camping sites in all 50 states.
                        </div>
                    </div>
                </div>
                <div className='about-img-cont-2'><img src={`${arrow_down}`} /></div>
            </div>
        )
    }
}

export default About