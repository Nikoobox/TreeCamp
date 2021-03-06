import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import { Dropdown } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
// import 'semantic-ui-dropdown/dropdown.css'

// import '../../../node_modules/semantic-ui-dropdown/dropdown.css';

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate:null,
            endDate:null,
            location:'',
            display:false,
            value:0,
            location:''
        }
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e, data) {
        return  this.setState({
                value: data.value,
                location: e.target.innerText
            })
    }

    handleSearch(){
        if(this.state.location !== ''){
            this.props.history.push({
                pathname: `/browse/${this.state.value}`,
                state: {
                    country: this.state.location
                }
            });
            
        } else{
            this.props.history.push({
                pathname: `/browse/9`,
                state: {
                    country: 'All Spots'
                }
            });
        }
    }

    render() {
        const searchIcon = <FontAwesomeIcon icon={faSearch} />
        const {value} = this.state;
       
        const searchOptions = [
            { key: 1,
            text: 'Sweden',
            value: 1 },
            { key: 2,
            text: 'Canada',
            value: 2 },
            { key: 3,
            text: 'Mexico',
            value: 3 },
            { key: 4,
            text: 'Laos',
            value: 4 },
            { key: 5,
            text: 'New Zealand',
            value: 5 },
            { key: 6,
            text: 'South Africa',
            value: 6 },
            { key: 7,
            text: 'Japan',
            value: 7},
            {key: 8,
            text: 'UK',
            value: 8}
        ]
        // const smallDevice = window.matchMedia('(max-width: 400px)').matches;
        // const orientation = smallDevice ? VERTICAL_ORIENTATION : HORIZONTAL_ORIENTATION;
        return (
            <div className='splash-main-search-box'>
                <div className='search-box-inner'>
                    <div className='search-box-inner-input'>
                        <span>{searchIcon}</span>
                        <Dropdown
                            placeholder='Select Destination'
                            fluid
                            search
                            selection
                            options={searchOptions}
                            onChange={this.handleInput}
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
                        // orientation={orientation}
                        // withPortal={smallDevice}
                        withPortal
                        block
                        readOnly
                        daySize={40}
                    />
                    <button className='search-box-button' onClick={()=>this.handleSearch()}>Search</button>

                </div>
            </div>
        )
    }
}

export default withRouter(SearchInput);