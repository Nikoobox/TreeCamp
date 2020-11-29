import React from 'react';
import { Link } from 'react-router-dom';


class About extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        

        return (
            <div className='about'>
                <div className='about-container'>
                    <div className='title'>
                        About
                    </div>
                    <div className='description'>
                        Tree Camp is a booking platform for unique accomodations. Rent one of the thousands unique tree houses all over the world. Become a host, meet nature enthusiasts and support sustainable tourism. It is time to elevate yourself! 

                        Tree Camp was inspiried by Hipcamp website, that offers camping sites in all 50 states.
                    </div>
                </div>
            </div>
        )
    }
}

export default About