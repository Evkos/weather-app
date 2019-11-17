import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Search from '../components/search'
import CurrentCityWeather from '../components/current-city-weather'
import OptionsBtns from '../components/options-btns'
import WeatherForecastList from '../components/weather-forecast-list'

const HomePage = () => {
  return (
    <Fragment>
      <Row>
        <Col>
          <Container>
            <Row className='mb-4'>
              <Search/>
              <CurrentCityWeather/>
              <OptionsBtns/>
            </Row>
            <Row>
              <WeatherForecastList/>
            </Row>
          </Container>
        </Col>
      </Row>
    </Fragment>
  )
}

export default HomePage