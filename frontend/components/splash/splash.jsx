import React from 'react';
// import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Splash extends React.Component{
    constructor(props){
        super(props);
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

                <div className='splash-explore-box'>
                    <div className='image-box'> 
                        <img src={window.splash_tree_house} alt="" className='image-box-image'/>
                        <div className='image-box-box'>
                            Explore something ...
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}
export default Splash;