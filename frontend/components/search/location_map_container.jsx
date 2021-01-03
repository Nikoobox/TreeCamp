import { connect } from 'react-redux';
import LocationMap from "./location_map.jsx";
import { fetchSpots} from '../../actions/spot_actions';
import { withRouter } from 'react-router-dom';

const mapState = (state, ownProps) => {
    // console.log('OWN PROPS', ownProps)
    // console.log(localStorage.getItem('countryName'))
    if (!ownProps.location.state){
        return {
            spots: Object.values(state.entities.spots),
            locationId: ownProps.match.params.locationId,
            countryName: localStorage.getItem('countryName')
        }
    }else{
        localStorage.setItem('countryName', ownProps.location.state.country);
        return {
            spots: Object.values(state.entities.spots),
            locationId: ownProps.match.params.locationId,
            countryName: ownProps.location.state.country
        }
    }
    
}

const mapDisp = dispatch => {
    return {
        fetchSpots: () => dispatch(fetchSpots())
   
    }
}

export default withRouter(connect(mapState, mapDisp)(LocationMap));