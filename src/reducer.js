const initialState = {
  cities: [],
  loading: true,
  currentCity: undefined,
  currentCityWeather: [],
  weatherForecast: [],
  favoriteCities: {},
  favoriteCitiesWeather: {},
  isCelsius: true,
  degreeBtn: 'To Fahrenheit',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CITIES_LOADED':
      return {
        ...state,
        cities: action.payload,
        loading: true
      }
    case 'CURRENT_CITY_LOADED':
      return {
        ...state,
        currentCity: action.payload,
        loading: true
      }
    case 'CURRENT_WEATHER_LOADED':
      return {
        ...state,
        currentCityWeather: action.payload,
        loading: true
      }
    case 'CURRENT_CITY_REMOVED':
      return {
        ...state,
        currentCityWeather: [],
        weatherForecast: [],
        currentCity: undefined,
      }
    case 'WEATHER_FORECAST_LOADED':
      return {
        ...state,
        weatherForecast: action.payload,
        loading: false
      }
    case 'FAVORITE_CITY_ADDED':
      const updatedFavoriteCitiesAdd = {...state.favoriteCities }
      updatedFavoriteCitiesAdd[action.payload.id] =  action.payload
      return {
        ...state,
        favoriteCities: updatedFavoriteCitiesAdd
      }
    case 'FAVORITE_CITY_REMOVED':
      const updatedFavoriteCitiesRemove = {...state.favoriteCities }
      delete updatedFavoriteCitiesRemove[action.payload.id]
      return {
        ...state,
        favoriteCities: updatedFavoriteCitiesRemove
      }
    case 'FAVORITE_CITIES_WEATHER_LOADED':
      const updatedFavoriteCitiesWeather = {...state.favoriteCitiesWeather }
      updatedFavoriteCitiesWeather[action.payload.cityId] =  action.payload
      console.log(updatedFavoriteCitiesWeather)
      return {
        ...state,
        favoriteCitiesWeather: updatedFavoriteCitiesWeather,
        loading: false
      }
    case 'FAV_BTN_STYLE_CHANGED':
      return {
        ...state,
        favoriteBtn: action.payload,
      }
    case 'FAHRENHEIT_SWITCHED':
      return {
        ...state,
        degreeBtn: (state.isCelsius) ? 'To Celsius' : 'To Fahrenheit',
        isCelsius: !state.isCelsius,

      }

    default:
      return state
  }
}

export default reducer