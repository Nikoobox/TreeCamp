import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'nuka-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SpotIndexContainer from '../spot/spot_index_container';

class Splash extends React.Component{
    constructor(props){
        super(props);
        window.scrollTo(0, 0);
    }

    render(){
        const searchIcon = <FontAwesomeIcon icon={faSearch} />

        return(
            <div className='splash-main'>
                <div className='splash-main-title-box'>
                    <div className='splash-main-title'>Find yourself outside.</div>
                    
                    <div className='splash-main-subtitle'> Book one of these tree house cabin rentals today and stay in the trees!</div>
                </div>

                <div className='splash-main-search-box'>
                    <div className='search-box-inner'>
                        <div className='search-box-inner-input'>
                            <span>{searchIcon}</span>
                            <input type="search" placeholder='Climb the tallest tree ...' className='search-box-input'/>
                        </div>

                        <button className='search-box-dates'>Enter dates</button>
                        <button className='search-box-all-listings'>All listings</button>
                        <button className='search-box-button'>Search</button>

                    </div>
                </div>
                <SpotIndexContainer />

                <div className='splash-explore-box'>
                    <div className='image-box'> 
                        <img src={window.splash_tree_house} alt="" className='image-box-image'/>
                        <div className='image-box-box'>
                            <div className='box-title'>Own a tree house? Earn money with Treecamp</div>
                            <div className='box-sub'>Join our community of brave tree house lovers and nature enthusiasts</div>
                            <div className='box-button'><button>Learn more</button></div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}
export default Splash;