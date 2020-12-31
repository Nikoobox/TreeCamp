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
            display:false,
            value:''
        }
    }

    // showLocations(){
    //     const locations = [
    //         ['Sweden', 1],
    //         [ 'Canada', 2 ],
    //         [ 'Mexico', 3 ],
    //         [ 'Laos', 4 ],
    //         [ 'New Zealand', 5 ],
    //         [ 'South Africa', 6 ],
    //         ['Japan',7],
    //         ['UK', 8]
    //     ]
    // }

    handleInput(field) {
        console.log(field)
        return (e) => {
            console.log(e)
            this.setState({
                [field]: e.currentTarget.value
            })
        }
    }

    render() {
        console.log(this.state);
        const searchIcon = <FontAwesomeIcon icon={faSearch} />

        const {value} = this.state;

        const searchOptions = [
            {
                key: 1,
                text: 'Sweden',
                value: 1,
                // image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
            },
            {
                key: 2,
                text: 'Canada',
                value: 2,
            },
            {
                key: 3,
                text: 'Mexico',
                value: 3,
            },
            {
                key: 4,
                text: 'Laos',
                value: 4,
            },
            {
                key: 5,
                text: 'New Zealand',
                value: 5,
            },
            {
                key: 6,
                text: 'South Africa',
                value: 6,
            },
            {
                key: 7,
                text: 'Japan',
                value: 7,
            }
            ,
            {
                key: 8,
                text: 'UK',
                value: 8,
            }
        
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
                            options={searchOptions}
                            onChange={this.handleInput()}
                            value={value}
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