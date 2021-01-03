/* global google:false */
import React from 'react';

class MarkerManager {
    constructor(map, handleClick) {
        this.map = map;
        this.handleClick = handleClick;
        this.markers = {};
    }

    updateMarkers(spots) {
        spots.forEach((spot)=>{

            this.createMarkerFromSpot(spot)
        })
    }

    createMarkerFromSpot(spot) {
        const position = new google.maps.LatLng(spot.latitude, spot.longitude);

        const treeCampIcon = new google.maps.MarkerImage(
            `${tree_camp_logo}`,
            null,
            null, 
            null,
            new google.maps.Size(33, 40)
        );

        const marker = new google.maps.Marker({
            position,
            icon:treeCampIcon,
            map: this.map,
            spotId: spot.id
        });

        const spotData = `
        <div class='info-window-box'>
            <div class='img-box'>
            <img src=${spot.photoUrls[0]}/>
            </div>
            <div class='spot-box'>
                <div class='title'>${spot.title}</div>

                <div class='footer-box'>
                    <div class='rating'>${spot.rating}%</div>
                    <div class='price'>$${spot.price}/night</div>
                </div>
            </div>
        </div>
        `;
       

        let infoWind = new google.maps.InfoWindow({content:spotData});

        marker.addListener('click', () => this.handleClick(spot));
        
        this.markers[marker.spotId] = marker;

        marker.addListener('mouseover', function () {
            infoWind.open(this.map, marker);
        });
        marker.addListener('mouseout', function () {
            infoWind.close();
        });
    }


}

export default MarkerManager;
