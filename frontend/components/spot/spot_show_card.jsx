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
                        <div className='item-icon'>
                            {wheelChairIcon}
                        </div>
                        <div className='item-info'>
                            {area.ada_access ? '' : 'No'} ADA access
                            </div>
                    </div>
                </div>

                <div className='cards cards-essential'>
                    <div className='cards-name'>Essentials</div>
                    <div className='item-container'>
                        <div className='item-icon'>
                            {campfireIcon}
                        </div>
                        <div className='item-info'>
                            {essential.campfire ? 'Campfires allowed' : 'Campfires not allowed'}
                        </div>
                    </div>
                    <div className='item-container'>
                        <div className='item-icon'>
                            {elevatorIcon}
                        </div>
                        <div className='item-info'>
                            {essential.elevator ? 'Elevator available' : 'Elevator is not available'}
                        </div>
                    </div>
                    <div className='item-container'>
                        <div className='item-icon'>
                            {toiletIcon}
                        </div>
                        <div className='item-info'>
                            {essential.toilet ? 'Toilet available' : 'Toilet is not available'}
                        </div>
                    </div>
                    <div className='item-container'>
                        <div className='item-icon'>
                            {petsIcon}
                        </div>
                        <div className='item-info'>
                            {essential.pets ? 'Pet friendly' : 'Please no pets'}
                        </div>
                    </div>
                </div>

                <div className='cards cards-amenity'>
                    <div className='cards-name'>Amenities</div>
                    <div className='item-container'>
                        <div className='item-icon'>
                            {portWaterIcon}
                        </div>
                        <div className='item-info'>
                            {amenity.portable_water ? 'Portable water available' : 'Portable water is not available'}
                        </div>
                    </div>
                    <div className='item-container'>
                        <div className='item-icon'>
                            {kitchenIcon}
                        </div>
                        <div className='item-info'>
                            {amenity.kitchen ? 'Kitchen available' : 'Kitchen is not available'}
                        </div>
                    </div>
                    <div className='item-container'>
                        <div className='item-icon'>
                            {showerIcon}
                        </div>
                        <div className='item-info'>
                            {amenity.shower ? 'Shower available' : 'Shower is not available'}
                        </div>
                    </div>
                    <div className='item-container'>
                        <div className='item-icon'>
                            {wifiIcon}
                        </div>
                        <div className='item-info'>
                            {amenity.wifi ? 'Wifi provided' : 'Wifi is not provided'}
                        </div>
                    </div>
                    <div className='item-container'>
                        <div className='item-icon'>
                            {elIcon}
                        </div>
                        <div className='item-info'>
                            {amenity.electricity ? 'Electricity provided' : 'Electricity is not provided'}
                        </div>
                    </div>
                    <div className='item-container'>
                        <div className='item-icon'>
                            {bugsIcon}
                        </div>
                        <div className='item-info'>
                            {amenity.bug_spray ? 'Bug spray provided' : 'Bug spray is not provided'}
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default SpotShowCard