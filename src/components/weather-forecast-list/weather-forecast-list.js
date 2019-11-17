import React, { Component } from 'react'
import WeatherForecastListItem from '../weather-forecast-list-item'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Spinner from '../spinner'
import './weather-forecast-list.css'

class WeatherForecastList extends Component {

  displayForecast = () => {
    const { weatherForecast, isCelsius, loading } = this.props

    if (loading) {
      return <Spinner/>
    }
    if (weatherForecast.dailyForecasts) {
      return (
        <Row className="justify-content-md-center weather-forecast-list">
          {weatherForecast.dailyForecasts.map((day) => {
            return <WeatherForecastListItem key={day.id} item={day} isCelsius={isCelsius}/>
          })}
        </Row>
      )
    }
  }

  render () {

    const { weatherForecast } = this.props

    return (
      <Col className="mb-sm-4">
        <Card>
          <Card.Header as="h5" className="text-center">Forecast for 5 days</Card.Header>
          <Card.Body>
            <Card.Title className="text-center pb-4">{weatherForecast.headline}</Card.Title>
            <Container>
              {this.displayForecast()}
            </Container>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

const mapStateToProps = ({ weatherForecast, isCelsius, loading }) => {
  return { weatherForecast, isCelsius, loading }
}

export default compose(
  connect(mapStateToProps)
)(WeatherForecastList)