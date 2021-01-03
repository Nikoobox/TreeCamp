import React, { createElement } from 'react';
import MarkerManager from '../../util/marker_manager';
import Map from './map';
import Location from './location';
import { withRouter } from 'react-router-dom';



class LocationMap extends React.Component {
    constructor(props) {
        super(props);
       
    }

    componentDidMount() {
        this.props.fetchSpots();
        window.scrollTo(0, 0);
    }



    render() {
        if (this.props.spots.length === 0) return null; 
        // console.log('the props from maps is: ', this.props.spots);
        // console.log(this.props.countryName);
        

        let country, location, lat, lon;
        this.props.spots.forEach((spot)=>{
            if (this.props.countryName === spot.country){
                country = spot.country;
                lat= spot.latitude;
                lon = spot.longitude;
            }
        })

        const properSpots = this.props.spots.filter((spot)=>{
            if (spot.country === this.props.countryName){
                return spot
            }
        })
// console.log('PORPERSPOTS', properSpots)
        return (
            <div className='location-map-container'>
                <div className='left'>
                    {properSpots.map((spot, idx)=>{
                        return <Location 
                                    spot={spot}
                                    locationId={this.props.locationId}
                                    key={idx}
                                />
                    })}
                </div>
                <div className='right'>
                    <Map 
                        spots={this.props.spots}
                        locationId={this.props.locationId}
                        lat={lat}
                        lon={lon}
                    />
                </div>
            </div>
        )
    }
}

export default withRouter(LocationMap);