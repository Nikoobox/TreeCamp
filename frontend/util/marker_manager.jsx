/* global google:false */
import React from 'react';
import ReactDOMServer from 'react-dom/server';

class MarkerManager {
    constructor(map, handleClick) {
        this.map = map;
        this.handleClick = handleClick;
        this.markers = {};
    }

    updateMarkers(spot) {
        this.createMarkerFromSpot(spot)
    }

    createMarkerFromSpot(spot) {
        const position = new google.maps.LatLng(spot.latitude, spot.longitude);
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            spotId: spot.id
        });

        marker.addListener('click', () => this.handleClick(spot));
        this.markers[marker.spotId] = marker;
    }


}

export default MarkerManager;
