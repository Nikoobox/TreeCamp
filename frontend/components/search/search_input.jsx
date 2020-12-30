import React, { createElement } from 'react';
import MarkerManager from '../../util/marker_manager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import { Dropdown } from 'semantic-ui-react'

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate:null,
            endDate:null,
            location:'',
            display:false
        }
    }

    showLocations(){
        const locations = [
            ['Sweden', 1],
            [ 'Canada', 2 ],
            [ 'Mexico', 3 ],
            [ 'Laos', 4 ],
            [ 'New Zealand', 5 ],
            [ 'South Africa', 6 ],
            ['Japan',7],
            ['UK', 8]
        ]
        const locDiv = document.getElementById('locations-box');
        locations.forEach((loc)=>{
            let div = document.createElement('div')
            div.innerHTML = 
                `
                <div class='country' key=${loc[1]} id =${loc[1]}>
                    ${loc[0]}
                </div>
                `
            locDiv.appendChild(div)
            

        })
    }



    render() {
        // console.log(this.props);
        console.log(this.state);
        // let func = !this.state.display ? () => this.showLocations() : null;
        const searchIcon = <FontAwesomeIcon icon={faSearch} />
        const friendOptions = [
            {
                key: 'Sweden',
                text: 'Sweden',
                value: 'Sweden',
                // image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
            },
            {
                key: 'Canada',
                text: 'Canada',
                value: 'Canada',
                // image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
            },
        
        ]
        return (
            <div className='splash-main-search-box'>
                <div className='search-box-inner'>
                    <div className='search-box-inner-input'>
                        <span>{searchIcon}</span>
                        {/* <input type="search" placeholder='Climb the tallest tree ...' className='search-box-input' />
                        {/* onClick = {func} /> */}
                        {/* <div id='locations-box'>
                             
                        </div>  */}
                        <Dropdown
                            placeholder='Select Destination'
                            fluid
                            selection
                            options={friendOptions}
                        />
                    </div>
                    <DateRangePicker
                        startDate={this.state.startDate} 
                        startDateId="your_unique_start_date_id" 
                        endDate={this.state.endDate} 
                        endDateId="your_unique_end_date_id" 
                        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} 
                        focusedInput={this.state.focusedInput}
                        onFocusChange={focusedInput => this.setState({ focusedInput })}
                        displayFormat="MMM D"
                        startDatePlaceholderText="Add dates"
                        endDatePlaceholderText=""
                        noBorder={false}
                        hideKeyboardShortcutsPanel={true}
                        withPortal
                        block
                        readOnly
                        daySize={40}
                    />
                    <button className='search-box-all-listings'>All listings</button>
                    <button className='search-box-button'>Search</button>

                </div>
            </div>
        )
    }
}

export default SearchInput;