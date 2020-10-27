import React from 'react';
import FavoritesPage from "../pages/favorites/favorites.page";
import WeatherPage from "../pages/weather/weather.page";

const menuItems = [
  {
    label: 'Weather',
    name: 'weather',
    path: '/',
    component: <WeatherPage />
  }, {
    label: 'Favorites',
    name: 'favorites',
    path: '/favorites',
    component: <FavoritesPage />
  }
];

export default menuItems;