import React, {Component} from 'react'
import {Card, Dropdown} from 'semantic-ui-react'

class SearchLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityList: []
    };
  }

  searchLocationsByText = (e) => {
    if(!e.target.value)
      return;
    const {searchLocations, locationsFromSearch = []} = this.props;
    searchLocations(e.target.value);
    const dropDownOptions = locationsFromSearch.map(option => ({key: option.Key ,value: option.Key,text: option.LocalizedName }));
    this.setState({cityList: dropDownOptions});
  }

  selectLocationsByText = (e) => {
    const {getWeather,get5DaysWeather,selectedLocation} = this.props;
    const {locationDetails} = selectedLocation;
    if(!locationDetails)
      return;
    getWeather(locationDetails.Key);
    get5DaysWeather(locationDetails.Key);
  }

  render() {
    const {cityList} = this.state;
    return (
      <Card className="search-section">
        <Card.Content>
          <Card.Header>Search location</Card.Header>
          <Dropdown
            placeholder='Search by city'
            fluid
            search
            selection
            options={cityList}
            onSearchChange={(e) => this.searchLocationsByText(e)}
            onSelect={(e) => this.selectLocationsByText(e)}
          />
        </Card.Content>
      </Card>
    )
  }
}

export default SearchLocation;