// export const fetchSpots = spots => {
export const fetchSpots = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/spots',
        // data: spots
    })
}


export const fetchSpot = spotId => (
    $.ajax({
        method: 'GET',
        url: `/api/spots/${spotId }`
    })
);