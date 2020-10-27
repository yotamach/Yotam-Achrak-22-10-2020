import {actions} from './action.types';

let initialState = {
  locationsFromSearch: [],
  selectedLocation: {
    locationDetails: {},
    currentWeather: {},
    fiveDaysForecast: {}
  },
  favoritesLocations: [],
  error: null
};

function weatherReducer(state = initialState, action) {
  const {payload} = action;
  switch (action.type) {
    case actions.SET_ERROR:
      state = {
        ...state,
        ...payload
      };
      return state;
    case actions.SEARCH_LOCATION:
      state = {
        ...state,
        locationsFromSearch: payload.locationsFromSearch,
        selectedLocation: {
          ...state.selectedLocation,
          ...payload.selectedLocation
        }
      };
      return state;
    case actions.SELECT_LOCATION:
    case actions.GET_FORECAST:
      state = {
        ...state,
        selectedLocation: {
          ...state.selectedLocation,
          ...payload
        }
      };
      return state;
    case actions.ADD_TO_FAVORITES:
      const newFavoritesArrayToPush = state.favoritesLocations;
      newFavoritesArrayToPush.push(payload);
      state = {
        ...state,
        favoritesLocations: newFavoritesArrayToPush
      };
      return state;
    case actions.REMOVE_FROM_FAVORITES:
      const newFavoritesArrayToRemove = state
        .favoritesLocations
        .filter(location => location.cityCode !== payload.cityCode);
      state = {
        ...state,
        favoritesLocations: newFavoritesArrayToRemove
      };
      return state;
    default:
      return state;
  }
};
export default weatherReducer;