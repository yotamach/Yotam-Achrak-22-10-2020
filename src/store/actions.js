import {actions} from './action.types';
import * as React from 'react';
import {getErrorSelector, getSelectedLocationSelector, getLocationsFromSearchSelector, getFavoriteLocationsSelector} from './selectors';
import store from './index';
import * as axios from 'axios';
import { withRouter } from 'react-router';

const apiKey = 'G7jGe34MT3Snsc1OD4hVt343I8RKcebB';
const state = store.getState();
const {dispatch} = store;

const getError = (state) => {
  return getErrorSelector(state);
}

const getSelectedLocation = (state) => {
  return getSelectedLocationSelector(state);
}

const getLocationsFromSearch = (state) => {
  return getLocationsFromSearchSelector(state);
}

const getFavoriteLocations = (state) => {
  return getFavoriteLocationsSelector(state);
}

const addToFavorites = (cityName, cityCode) => {
  dispatch({
    type: actions.ADD_TO_FAVORITES,
    payload: {
      cityName,
      cityCode
    }
  });
}

const removeFromFavorites = (cityCode) => {
  dispatch({type: actions.REMOVE_FROM_FAVORITES, payload: {
      cityCode
    }});
}

const searchLocations = (text) => {
  axios(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${text}`)
    .then(resp => dispatch({
    type: actions.SEARCH_LOCATION,
    payload: {
      locationsFromSearch: resp.data,
      selectedLocation: {
        locationDetails: resp.data[0]
      }
    }
  }))
    .catch(err => 
      dispatch({
        type: actions.SET_ERROR,
        payload: {
          error: err
        }
      }));
}

const get5DaysWeatherByCity = (cityCode) => {
  axios(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityCode}?apikey=${apiKey}`)
    .then(resp => dispatch({
    type: actions.GET_FORECAST,
    payload: {
      fiveDaysForecast: resp.data
    }
  }))
    .catch(err => dispatch({
      type: actions.SET_ERROR,
      payload: {
        error: err
      }
    }));
}

const getWeatherByCity = (cityCode) => {
  axios(`http://dataservice.accuweather.com/currentconditions/v1/${cityCode}?apikey=${apiKey}`)
    .then(resp => dispatch({
    type: actions.SELECT_LOCATION,
    payload: {
      currentWeather: resp.data[0]
    }
  }))
    .catch(err => dispatch({
      type: actions.SET_ERROR,
      payload: {
        error: err
      }
    }));
}

export {
  getError,
  getFavoriteLocations,
  getLocationsFromSearch,
  searchLocations,
  getSelectedLocation,
  getWeatherByCity,
  addToFavorites,
  get5DaysWeatherByCity,
  removeFromFavorites
};