import React from 'react';
import { Link } from 'react-router-dom';
import SpotIndexCard from './spot_index_card';

class SpotIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchSpots()
    }

    render(){
        const {spots, fetchSpot } = this.props;
        
        const spotsRand = spots.map((spot, idx)=>{
            return <SpotIndexCard spot={spot} fetchSpot={fetchSpot} key={idx}/>
        })

        return (
            <div className='spot-index-container'>
                <span>Recently viewed listings</span>
                <div className='collection'>
                    {spotsRand}
                </div>

                
            </div>
        )
    }
}

export default SpotIndex;