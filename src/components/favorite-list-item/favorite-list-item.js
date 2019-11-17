import React, { Component } from 'react'
import { Card, Col } from 'react-bootstrap'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { favoriteCitiesWeatherLoadedMiddleware } from '../../actions/middlewares'
import { currentCityLoadedAction } from '../../actions/actions'
import { Link } from 'react-router-dom'
import Spinner from '../spinner'

class FavoriteListItem extends Component {

  componentDidMount () {
    let { city, favoriteCitiesWeatherLoadedMiddleware } = this.props
    favoriteCitiesWeatherLoadedMiddleware(city)
  }

  getItemWeather = () => {
    let { favoriteCitiesWeather, city, isCelsius } = this.props

    if (favoriteCitiesWeather[city.id] === undefined) {
      return <Spinner/>
    }
    const temperature = (isCelsius) ? `${favoriteCitiesWeather[city.id].temperatureCelsius}℃` : `${favoriteCitiesWeather[city.id].temperatureFahrenheit}℉`

    return (
      <Card.Body>
        <img src={favoriteCitiesWeather[city.id].weatherIcon} alt="day weather icon"/>
        <h6>{temperature}</h6>
        <span>{favoriteCitiesWeather[city.id].weatherText}</span>
      </Card.Body>
    )

  }

  clickHandler = (city) => {
    const { currentCityLoadedAction } = this.props
    currentCityLoadedAction(city)
  }

  render () {
    let { city } = this.props

    return (
      <Col md={3} className="mb-sm-4">
        <Card className="text-center">
          <Link to='/'>
            <Card.Header onClick={() => this.clickHandler(city)} as="h5"
                         className="text-center">{city.label}</Card.Header>
          </Link>
          {this.getItemWeather()}
        </Card>
      </Col>
    )
  }
}

const mapStateToProps = ({ favoriteCitiesWeather, isCelsius }) => {
  return { favoriteCitiesWeather, isCelsius }
}

const mapDispatchToProps = {
  favoriteCitiesWeatherLoadedMiddleware,
  currentCityLoadedAction
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(FavoriteListItem)