import React from 'react';
import { Link } from 'react-router-dom';
import SpotIndexCard from './spot_index_card';

class SpotIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchSpots()
        // console.log(this.props.spots)
    }

    render(){
        const {spots, fetchSpot } = this.props;
        // const { title, description, price, location, country, rating, latitude, longitude } = this.props.posts;
        // console.log(this.props);
        const postsRand = spots.map((spot, idx)=>{
            return <SpotIndexCard spot={spot} fetchSpot={fetchSpot} key={idx}/>
        })

        return <div className='spot-index-container'>
                <span>Recently viewed listings</span>
            {/* {spots.map((spot, idx)=>{
                return <SpotIndexCard spot={spot} fetchSpot={fetchSpot} key={idx} />
            })} */}
            {postsRand}
        </div>
    }
}

export default SpotIndex;