import React, {Component} from 'react'
import SearchLocation from '../../components/search-location/searchLocation'
import WeatherMainView from '../../components/weatherMainView/weatherMainView'
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {
  getSelectedLocation,
  get5DaysWeatherByCity,
  getError,
  searchLocations,
  getLocationsFromSearch,
  getWeatherByCity,
  getFavoriteLocations,
  addToFavorites,
  removeFromFavorites
} from '../../store/actions';

const mapStateToProps = (state) => {
  return {selectedLocation: getSelectedLocation(state), error: getError(state), locationsFromSearch: getLocationsFromSearch(state), getFavoriteLocations: getFavoriteLocations(state)};
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchLocations: (text) => {
      searchLocations(text);
    },
    getWeather: (city) => {
      getWeatherByCity(city);
    },

    get5DaysWeather: (city) => {
      get5DaysWeatherByCity(city);
    },
    addToFavoritesList: (cityName, cityCode) => {
      addToFavorites(cityName, cityCode);
    },
    removeFromFavoritesList: (cityCode) => {
      removeFromFavorites(cityCode);
    },
  }
};

class WeatherPage extends Component {
  getWeatherByCityCode = (cityCode) => {
    const {getWeather} = this.props;
    getWeather(cityCode);
  }

  get5DaysWeatherByCityCode = (cityCode) => {
    const {get5DaysWeather} = this.props;
    get5DaysWeather(cityCode);
  }

  searchLocationsByText = (text) => {
    const {searchLocations} = this.props;
    searchLocations(text);
  }

  componentDidMount() {
    const qp = new URLSearchParams(window.location.search); 
    const code = qp.get('cityCode');
    const name = qp.get('cityName');
    console.log(code);
    if(code && name) {
      this.searchLocationsByText(name);
      this.getWeatherByCityCode(code);
      this.get5DaysWeatherByCityCode(code);
    } else {
      this.searchLocationsByText('Tel Aviv');
      this.getWeatherByCityCode('215854');
      this.get5DaysWeatherByCityCode('215854');
    }
  }

  render() {
    const {
      addToFavoritesItemToList,
      searchLocations,
      get5DaysWeather,
      getWeather,
      locationsFromSearch,
      selectedLocation,
      getFavoriteLocations,
      addToFavoritesList,
      getError,
      removeFromFavoritesList
    } = this.props;
    console.log('error: ',getError);
    return (!getError ?
     <div>
        <SearchLocation
          searchLocations={searchLocations}
          getWeather={getWeather}
          locationsFromSearch={locationsFromSearch}
          get5DaysWeather={get5DaysWeather}
          selectedLocation={selectedLocation}/>
        <WeatherMainView
          selectedLocation={selectedLocation}
          addToFavoritesItemToList={addToFavoritesItemToList}
          getFavoriteLocations={getFavoriteLocations}
          addToFavoritesList={addToFavoritesList}
          removeFromFavoritesList={removeFromFavoritesList}
          /> 
      </div> : <Redirect  to="/error"/>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(WeatherPage);