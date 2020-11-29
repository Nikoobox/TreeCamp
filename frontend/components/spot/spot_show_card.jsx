import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSprayCan, faBolt, faWifi, faShower, faUtensils, faHandHoldingWater, faDog, faToiletPaper, faArrowsAltV, faFire, faWheelchair, faUser, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

class SpotShowCard extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const { area, essential, amenity } = this.props.spot;

        const mapMarkerAlt = <FontAwesomeIcon icon={faMapMarkerAlt} />
        const userIcon = <FontAwesomeIcon icon={faUser} />
        const wheelChairIcon = <FontAwesomeIcon icon={faWheelchair} />
        const campfireIcon = <FontAwesomeIcon icon={faFire} />
        const elevatorIcon = <FontAwesomeIcon icon={faArrowsAltV} />
        const toiletIcon = <FontAwesomeIcon icon={faToiletPaper} />
        const petsIcon = <FontAwesomeIcon icon={faDog} />
        const portWaterIcon = <FontAwesomeIcon icon={faHandHoldingWater} />
        const kitchenIcon = <FontAwesomeIcon icon={faUtensils} />
        const showerIcon = <FontAwesomeIcon icon={faShower} />
        const wifiIcon = <FontAwesomeIcon icon={faWifi} />
        const elIcon = <FontAwesomeIcon icon={faBolt} />
        const bugsIcon = <FontAwesomeIcon icon={faSprayCan} />
        
        return(
            <div className='cards-container'>
                <div className='cards cards-area'>
                    <div className='cards-name'>Lodging provided</div>
                    <div className='item-container'>
                        <div className='item-icon'>
                            {mapMarkerAlt}
                        </div>
                        <div className='item-info'>
                            {area.num_sites} {area.num_sites === 1 ? 'site' : 'sites'}
                        </div>
                    </div>
                    <div className='item-container'>
                        <div className='item-icon'>
                            {userIcon}
                        </div>
                        <div className='item-info'>
                            Up to {area.max_guests} guests per site
                            </div>
                    </div>
                    <div className='item-container'>
                        {area.ada_access ?
                        <>
                            <div className='item-icon'>{wheelChairIcon}</div>
                            <div className='item-info'>ADA access </div>
                        </> :
                        <>
                                <div className='item-icon na'>{wheelChairIcon}</div>
                            <div className='item-info na'>No ADA access</div>
                        </>}
                    </div>
                </div>

                <div className='cards cards-essential'>
                    <div className='cards-name'>Essentials</div>
                    <div className='item-container'>
                        {/* <div className='item-icon'>
                            {campfireIcon}
                        </div>
                        <div className='item-info'>
                            {essential.campfire ? 'Campfires allowed' : 'Campfires not allowed'}
                        </div> */}
                        {essential.campfire ?
                        <>
                            <div className='item-icon'>{campfireIcon}</div>
                            <div className='item-info'>Campfires allowed </div>
                        </> :
                        <>
                            <div className='item-icon na'>{campfireIcon}</div>
                            <div className='item-info na'>Campfires not allowed</div>
                        </>}
                    </div>
                    <div className='item-container'>
                        {essential.elevator ?
                        <>
                            <div className='item-icon'>{elevatorIcon}</div>
                            <div className='item-info'>Elevator available </div>
                        </> :
                        <>
                            <div className='item-icon na'>{elevatorIcon}</div>
                            <div className='item-info na'>Elevator is not available</div>
                        </>}
                    </div>
                    <div className='item-container'>
                        {essential.toilet ?
                        <>
                            <div className='item-icon'>{toiletIcon}</div>
                            <div className='item-info'>Toilet available </div>
                        </> :
                        <>
                            <div className='item-icon na'>{toiletIcon}</div>
                            <div className='item-info na'>Toilet is not available</div>
                        </>}
                    </div>
                    <div className='item-container'>
                        {essential.pets ?
                        <>
                            <div className='item-icon'>{petsIcon}</div>
                            <div className='item-info'>Pet friendly </div>
                        </> :
                        <>
                            <div className='item-icon na'>{petsIcon}</div>
                            <div className='item-info na'>Please no pets</div>
                        </>}
                    </div>
                </div>

                <div className='cards cards-amenity'>
                    <div className='cards-name'>Amenities</div>
                    <div className='item-container'>
                        {amenity.portable_water ?
                        <>
                            <div className='item-icon'>{portWaterIcon}</div>
                            <div className='item-info'>Portable water available </div>
                        </> :
                        <>
                            <div className='item-icon na'>{portWaterIcon}</div>
                            <div className='item-info na'>Portable water is not available</div>
                        </>}
                        
                    </div>
                    <div className='item-container'>
                        {amenity.kitchen ?
                        <>
                            <div className='item-icon'>{kitchenIcon}</div>
                            <div className='item-info'>Kitchen available</div>
                        </> :
                        <>
                            <div className='item-icon na'>{kitchenIcon}</div>
                            <div className='item-info na'>Kitchen is not available</div>
                        </>}
                    </div>
                    <div className='item-container'>
                        {amenity.shower ?
                        <>
                            <div className='item-icon'>{showerIcon}</div>
                            <div className='item-info'>Shower available</div>
                        </> :
                        <>
                            <div className='item-icon na'>{showerIcon}</div>
                            <div className='item-info na'>Shower is not available</div>
                        </>}
                    </div>
                    <div className='item-container'>
                        {/* <div className='item-icon'>
                            {wifiIcon}
                        </div>
                        <div className='item-info'>
                            {amenity.wifi ? 'Wifi provided' : 'Wifi is not provided'}
                        </div> */}
                        {amenity.wifi ?
                        <>
                            <div className='item-icon'>{wifiIcon}</div>
                            <div className='item-info'>Wifi provided </div>
                        </> :
                        <>
                            <div className='item-icon na'>{wifiIcon}</div>
                            <div className='item-info na'>Wifi is not provided</div>
                        </>}
                    </div>
                    <div className='item-container'>
                        {amenity.electricity ?
                        <>
                            <div className='item-icon'>{elIcon}</div>
                            <div className='item-info'>Electricity provided </div>
                        </> : 
                        <>
                            <div className='item-icon na'>{elIcon}</div>
                            <div className='item-info na'>No electricity</div>
                        </>}
                    </div>
                    <div className='item-container'>
                        {/* <div className='item-icon'>
                            {bugsIcon}
                        </div>
                        <div className='item-info'>
                            {amenity.bug_spray ? 'Bug spray provided' : 'Bug spray is not provided'}
                        </div> */}
                        {amenity.bug_spray ?
                        <>
                            <div className='item-icon'>{bugsIcon}</div>
                            <div className='item-info'>Bug spray provided </div>
                        </> :
                        <>
                            <div className='item-icon na'>{bugsIcon}</div>
                            <div className='item-info na'>Bug spray is not provided</div>
                        </>}
                    </div>

                </div>

            </div>
        )
    }
}

export default SpotShowCard