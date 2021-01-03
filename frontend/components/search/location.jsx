import React, { createElement } from 'react';


class Location extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        // this.props.fetchSpots();
        // window.scrollTo(0, 0);
    }



    render() {
        console.log('the props from location: ', this.props);
       
        return (
            <div className='location-container'>
                <div className='spot-box'>
                    {this.props.spot.title}
                    <br />
                    {this.props.spot.country}
                </div>
            </div>
        )
    }
}

export default Location;