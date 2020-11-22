import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrow, faHiking, faMoon, faBiking, faFish } from '@fortawesome/free-solid-svg-icons';


class SpotShowActivity extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { activity } = this.props.spot;

        const bikingIcon = <FontAwesomeIcon icon={faBiking} />
        const fishingIcon = <FontAwesomeIcon icon={faFish} />
        const starIcon = <FontAwesomeIcon icon={faMoon} />
        const hikingIcon = <FontAwesomeIcon icon={faHiking} />
        const wildlifeIcon = <FontAwesomeIcon icon={faCrow} />

        const bikingRend = activity.biking ? 
            <div className='box'>
                <div className='box-icon'> {bikingIcon} </div>
                <div className='box-title'> Biking </div>
            </div>
            : '';

        const fishingRend = activity.fishing ?
            <div className='box'>
                <div className='box-icon'> {fishingIcon} </div>
                <div className='box-title'> Fishing </div>
            </div>
            : '';
        
        const stargazingRend = activity.stargazing ?
            <div className='box'>
                <div className='box-icon'> {starIcon} </div>
                <div className='box-title'> Stargazing </div>
            </div>
            : '';

        const hikingRend = activity.hiking ?
            <div className='box'>
                <div className='box-icon'> {hikingIcon} </div>
                <div className='box-title'> Hiking </div>
            </div>
            : '';
        
        // const hikingRend = activity.hiking ?
        //     <div className='box'>
        //         <div className='box-icon'> {hikingIcon} </div>
        //         <div className='box-title'> Hiking </div>
        //     </div>
        //     : '';
        
        const wildlifeRend = activity.wildlife_watching ?
            <div className='box'>
                <div className='box-icon'> {wildlifeIcon} </div>
                <div className='box-title'> Wildlife Watching </div>
            </div>
            : '';

        return (
            <div className='activities-container'>
                <div className='title'>Activities</div>
                <div className='sub'>Offered on the Host's property or nearby.</div>
                <div className='boxes'>
                    {bikingRend}
                    {fishingRend}
                    {stargazingRend}
                    {hikingRend}
                    {wildlifeRend}
                </div>
            </div>
        )
    }
}

export default SpotShowActivity