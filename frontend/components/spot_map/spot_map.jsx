import React from 'react';
// import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';


class SpotMap extends React.Component {

    componentDidMount() {
        const center = { lat: this.props.spot.latitude, lng: this.props.spot.longitude };
        const myCenter = { lat: (this.props.spot.latitude), lng: (this.props.spot.longitude-0.03) };
        // console.log('my center',myCenter);
        const mapOptions = {
            center: myCenter, 
            mapTypeId: 'terrain',
            zoom: 13,
            streetViewControl: false,
            fullscreenControl: false,
            mapTypeControl:false
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions);
        // this.MarkerManager = new MarkerManager(this.map);
        // this.MarkerManager.updateMarkers(this.props.spot);
        const circle = new google.maps.Circle({
            strokeColor: '#40D9AC',
            strokeOpacity: 1,
            strokeWeight: 2,
            fillColor: '#40D9AC',
            fillOpacity: 0.2,
            radius: 1100,
            map: this.map,
            center
        })
    }

    componentDidUpdate() {
        // this.MarkerManager.updateMarkers(this.props.spot);
    }

    render() {
        // console.log(this.props)
        const {spot, users} = this.props
        return (
            <div className="map" id='map-container' ref="map">
                <div className='map-container' ref={map => this.mapNode = map}>
                </div>
                <div className='spot-box'>
                    <div className='row'>
                        <div className='column-1'>Property</div>
                        <div className='column-2'>{users[spot.host_id].first_name} {users[spot.host_id].last_name}</div>
                    </div>
                    <div className='row'>
                        <div className='column-1'>Area</div>
                        <div className='column-2'>{spot.location}</div>
                    </div>
                    <div className='row'>
                        <div className='column-1'>Country</div>
                        <div className='column-2'>{spot.country}</div>
                    </div>
                    <div className='row last'>
                        <div className='column-1'>${spot.price}/night</div>
                        <div className='column-2'>{spot.area.num_sites} Site{spot.area.num_sites>1?'s':''}</div>
                    </div>
                </div>
            </div>
        )
    }        
}

export default SpotMap;