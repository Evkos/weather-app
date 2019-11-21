import { _transformFahrenheitToCelsius, _getDayOfWeek } from '../utils'

export default class AccuweatherService {

  _apiBase = 'https://dataservice.accuweather.com'
  _applicationToken = localStorage.getItem('accessToken')

  getResource = async (url, params = '') => {
    const res = await fetch(`${this._apiBase}${url}?apikey=${this._applicationToken}${params}`)

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json()
  }
//TODO make this method cacheable
  getCities = async (searchString) => {
    const cities = await this.getResource(`/locations/v1/cities/autocomplete`, `&q=${searchString}`)
    return this._transformCities(cities)
  }

  getCity = async (searchString) => {
    const matchedCities = await this.getCities(searchString)
    if (matchedCities) {
      let city = matchedCities.find(item => item.label === searchString)
      return matchedCities.find(item => item.label === searchString)
    }
  }

  getCurrentWeather = async (id) => {
    const conditions = await this.getResource(`/currentconditions/v1/${+id}`)
    return this._transformCurrentWeather(conditions[0])

  }

  getForecasts = async (id) => {
    const forecasts = await this.getResource(`/forecasts/v1/daily/5day/${id}`)
    return this._transformForecast(forecasts)
  }

  _transformCities = (cities) => {
    return cities.map((city) => {
      return {
        id: city.Key,
        label: city.LocalizedName
      }
    })
  }

  _transformCurrentWeather = (weather) => {
    return {
      temperatureCelsius: weather.Temperature.Metric.Value,
      temperatureFahrenheit: weather.Temperature.Imperial.Value,
      weatherText: weather.WeatherText,
      weatherIcon: this._trasfromWeatherIcon(weather.WeatherIcon)
    }
  }

  _transformForecast = (forecast) => {

    const dailyForecasts = forecast.DailyForecasts.map((day) => {

      return {
        id: day.EpochDate,
        dayOfWeek: _getDayOfWeek(day.Date),
        day: {
          temperatureCelsius: _transformFahrenheitToCelsius(day.Temperature.Maximum.Value),
          temperatureFahrenheit: day.Temperature.Maximum.Value,
          icon: this._trasfromWeatherIcon(day.Day.Icon),
          phrase: day.Day.IconPhrase,
        },
        night: {
          temperatureCelsius: _transformFahrenheitToCelsius(day.Temperature.Minimum.Value),
          temperatureFahrenheit: day.Temperature.Minimum.Value,
          icon: this._trasfromWeatherIcon(day.Night.Icon),
          phrase: day.Night.IconPhrase
        },
      }
    })

    return {
      headline: forecast.Headline.Text,
      dailyForecasts: dailyForecasts
    }
  }

  _trasfromWeatherIcon = (id) => {
    const icon = (id.toString().length === 1) ? '0' + id : id

    return `https://developer.accuweather.com/sites/default/files/${icon}-s.png`
  }

}
