import {
  currentCityLoadedAction,
  currentWeatherLoadedAction,
  currentCityRemovedAction,
  citiesLoadedAction,
  weatherForecastLoadedAction,
  favoriteCitiesWeatherLoadedAction
} from './actions'
import AccuweatherService from '../services/accuweather-service'

const accuweatherService = new AccuweatherService()

const citiesLoadedMiddleware = (query) => {
  return (dispatch) => {
    accuweatherService.getCities(query)
      .then((matchedCities) => dispatch(citiesLoadedAction(matchedCities)))
  }
}

const currentCitySelectedMiddleware = (currentCity) => {
  return (dispatch) => {
    if (currentCity !== undefined) {
      dispatch(currentCityLoadedAction(currentCity))
      accuweatherService.getCurrentWeather(currentCity.id)
        .then((data) => dispatch(currentWeatherLoadedAction(data)))
      accuweatherService.getForecasts(currentCity.id)
        .then((data) => dispatch(weatherForecastLoadedAction(data)))
    } else {
      dispatch(currentCityRemovedAction())
    }
  }
}

const currentCityLoadedMiddleware = (currentCityLabel) => {

  return (dispatch) => {
    accuweatherService.getCity(currentCityLabel)
      .then((currentCity) => dispatch(currentCitySelectedMiddleware(currentCity)))
  }
}

const favoriteCitiesWeatherLoadedMiddleware = (currentCity) => {
  return (dispatch) => {
    accuweatherService.getCurrentWeather(currentCity.id)
      .then((data) => {
        const patchedData = { ...data, cityId: currentCity.id }
        dispatch(favoriteCitiesWeatherLoadedAction(patchedData))

      })
  }
}

export {
  citiesLoadedMiddleware,
  currentCitySelectedMiddleware,
  currentCityLoadedMiddleware,
  favoriteCitiesWeatherLoadedMiddleware
}