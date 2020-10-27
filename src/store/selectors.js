const getLocationsFromSearchSelector = (state) => state.locationsFromSearch;
const getSelectedLocationSelector = (state) => state.selectedLocation;
const getFavoriteLocationsSelector = (state) => state.favoritesLocations;
const getErrorSelector = (state) => state.error;

export {
    getLocationsFromSearchSelector,
    getSelectedLocationSelector,
    getFavoriteLocationsSelector,
    getErrorSelector
};