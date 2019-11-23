const citiesLoadedAction = (cities) => {
  return {
    type: 'CITIES_LOADED',
    payload: cities
  }
}

const currentCityLoadedAction = (currentCity) => {
  return {
    type: 'CURRENT_CITY_LOADED',
    payload: currentCity
  }
}

const currentWeatherLoadedAction = (weather) => {
  return {
    type: 'CURRENT_WEATHER_LOADED',
    payload: weather
  }
}

const currentCityRemovedAction = () => {
  return {
    type: 'CURRENT_CITY_REMOVED',
  }
}

const weatherForecastLoadedAction = (weather) => {
  return {
    type: 'WEATHER_FORECAST_LOADED',
    payload: weather
  }
}

const favoriteCityAddedAction = (city) => {
  return {
    type: 'FAVORITE_CITY_ADDED',
    payload: city
  }
}

const favoriteCityRemovedAction = (city) => {
  return {
    type: 'FAVORITE_CITY_REMOVED',
    payload: city
  }
}

const favoriteCitiesWeatherLoadedAction = (weather) => {
  return {
    type: 'FAVORITE_CITIES_WEATHER_LOADED',
    payload: weather
  }
}

const fahrenheitSwitchedAction = () => {
  return {
    type: 'FAHRENHEIT_SWITCHED',
  }
}

const tokenPopupShowedAction = () => {
  return {
    type: 'TOKEN_POPUP_SHOWED',
  }
}

export {
  citiesLoadedAction,
  currentCityLoadedAction,
  currentWeatherLoadedAction,
  currentCityRemovedAction,
  weatherForecastLoadedAction,
  favoriteCityAddedAction,
  favoriteCityRemovedAction,
  fahrenheitSwitchedAction,
  favoriteCitiesWeatherLoadedAction,
  tokenPopupShowedAction
}
