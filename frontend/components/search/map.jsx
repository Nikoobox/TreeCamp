import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';


class Map extends React.Component {
    constructor(props) {
        super(props);

        this.handleMarkerClick = this.handleMarkerClick.bind(this);
    }

    handleMarkerClick(spot) {
        this.props.history.push(`/spots/${spot.id}`);
    }

    componentDidMount() {
        this.rendMap();
    }

    rendMap(){
        const myCenter = { lat: this.props.lat, lng: this.props.lon };   
        const mapOptions = {
            center: myCenter,
            mapTypeId: 'terrain',
            zoom: 7,
            streetViewControl: false,
            fullscreenControl: false,
            mapTypeControl: false
        };

        const map = this.refs.map;
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
        this.MarkerManager.updateMarkers(this.props.spots);
    }

    render() {
        // console.log('the props from map: ', this.props);

        return (
            <div className='map-container' ref={map => this.mapNode = map}> 

            </div>
        )
    }
}

export default withRouter(Map);