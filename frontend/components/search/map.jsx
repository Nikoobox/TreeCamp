import React, { createElement } from 'react';
import MarkerManager from '../../util/marker_manager';




class Map extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        // this.props.fetchSpots();
        // window.scrollTo(0, 0);
    }



    render() {
        console.log('the props from map: ', this.props);

        return (
            <div className='location-map-container'>
               
            </div>
        )
    }
}

export default Map;