import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Spinner from '../spinner'

class CurrentCityWeather extends PureComponent {

  displayComponent = () => {
    const { currentCity, currentCityWeather, loading, isCelsius  } = this.props

    const temperature = (isCelsius) ? `${currentCityWeather.temperatureCelsius}℃` : `${currentCityWeather.temperatureFahrenheit}℉`
    if (loading) {
      return <Spinner/>
    }

    if (currentCity === undefined) {
      return (
        <Row>
          <Col md={12} className="text-center">
            Please choose city you need
          </Col>
        </Row>
      )
    } else {
      return (
        <Row>
          <Col md={6}>
            <img src={currentCityWeather.weatherIcon} alt="weather icon"/>
          </Col>
          <Col md={6}>
            <h5>{currentCity.label}</h5>
            <h5>{temperature} </h5>
            <h6>{currentCityWeather.weatherText}</h6>
          </Col>
        </Row>
      )
    }
  }

  render () {
    return (
      <Col md={4} className="mb-4">
        <Card>
          <Card.Header as="h5" className="text-center">Current weather</Card.Header>
          <Card.Body>
            <Container>
              {this.displayComponent()}
            </Container>
          </Card.Body>
        </Card>

      </Col>
    )
  }
}

const mapStateToProps = ({ currentCity, currentCityWeather, loading, isCelsius }) => {
  return { currentCity, currentCityWeather, loading, isCelsius }
}

export default compose(
  connect(mapStateToProps)
)(CurrentCityWeather)
