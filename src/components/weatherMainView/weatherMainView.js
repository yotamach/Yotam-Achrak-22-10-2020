import React, {Component} from 'react'
import {Card, Button, Image} from 'semantic-ui-react'
import WeatherForecast from '../weather-forecast/weatherForecast';
import {getImageUrl} from '../../utils/utils';

export default class WeatherMainView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false
    };
  }
  
componentDidUpdate() {
  const {selectedLocation,getFavoriteLocations} = this.props;
  const {
    locationDetails = {}
  } = selectedLocation;
  if(getFavoriteLocations.filter(item => item.cityCode === locationDetails.Key).length && this.state.favorite === false) {
    this.setState({favorite: true});
  }
  if(!getFavoriteLocations.filter(item => item.cityCode === locationDetails.Key).length && this.state.favorite === true) {
    this.setState({favorite: false});
  }
}


  removeFromList = (cityCode) => {
    const {removeFromFavoritesList} = this.props;
    if (!this.state.favorite) 
      return;
    this.setState({favorite: false});
    removeFromFavoritesList(cityCode);
  }
  addToList = (cityName, cityCode) => {
    const {addToFavoritesList} = this.props;
    if (this.state.favorite) 
      return;
    this.setState({favorite: true});
    addToFavoritesList(cityName, cityCode);
  }

  render() {
    const {selectedLocation} = this.props;
    const {
      locationDetails = {},
      currentWeather = {},
      fiveDaysForecast = {}
    } = selectedLocation;

    return (
      <div>
        <Card className="weather-main-view">
          <Card.Content>
            {!this.state.favorite
              ? <Button
                  onClick={() => this.addToList(selectedLocation.locationDetails.LocalizedName, selectedLocation.locationDetails.Key)}
                  floated="right"
                  basic
                  color='green'>
                  Add to favorites
                </Button>
              : <Button
                onClick={() => this.removeFromList(selectedLocation.locationDetails.Key)}
                floated="right"
                basic
                color='red'>
                Remove from favorites
              </Button>}
            <Card.Header floated="left">{locationDetails.LocalizedName}</Card.Header>
            <Card.Header floated="left">{!currentWeather.Temperature
                ? null
                : currentWeather.Temperature.Metric.Value}
              &#8451;</Card.Header>
          </Card.Content>
          <Card.Content className="main-view" extra>
            <Image src={getImageUrl(currentWeather.WeatherIcon)} size='large'/>
            <Card.Header>{currentWeather.WeatherText}</Card.Header>
          </Card.Content>
          <WeatherForecast fiveDaysForecast={fiveDaysForecast}/>
        </Card>
      </div>
    )
  }
}
