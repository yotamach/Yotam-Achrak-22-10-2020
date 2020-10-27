import React, {Component} from 'react'
import FavoritesList from '../favorites-list/favoritesList';

export default class FavoritesMainView extends Component {
  render() {
    const {removeFromFavoritesList, getFavoriteLocations} = this.props;
    return (
      <div>
        <FavoritesList
          removeFromFavoritesList={removeFromFavoritesList}
          getFavoriteLocations={getFavoriteLocations}/>
      </div>);
  }
}