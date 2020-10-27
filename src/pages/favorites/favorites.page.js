import React, {Component} from 'react'
import FavoritesMainView from '../../components/favoritesMainView/favoritesMainView';
import {connect} from 'react-redux';
import {
    getError,
    getFavoriteLocations,
    removeFromFavorites
  } from '../../store/actions';

const mapStateToProps = (state) => {
  return {error: getError(state), getFavoriteLocations: getFavoriteLocations(state)};
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromFavoritesList: (cityCode) => {
      removeFromFavorites(cityCode);
    }
  }
};

class FavoritesPage extends Component {
  render() {
    const {removeFromFavoritesList, getFavoriteLocations} = this.props;
    return (
      <div>
        Favorites page
        <FavoritesMainView
          removeFromFavoritesList={removeFromFavoritesList}
          getFavoriteLocations={getFavoriteLocations}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
