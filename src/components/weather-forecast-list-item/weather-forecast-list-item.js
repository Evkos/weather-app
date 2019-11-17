import React from 'react'
import { Card, Col } from 'react-bootstrap'

const WeatherForecastListItem = ({ item, isCelsius }) => {

  const temperature = (isCelsius) ? `${item.day.temperatureCelsius}℃` : `${item.day.temperatureFahrenheit}℉`

  return (
    <Col md={2} className="mb-4 forecast-item-wrapper">
      <Card className="text-center forecast-item">
        <Card.Header as="h6">{item.dayOfWeek}</Card.Header>
        <Card.Body>
          <img src={item.day.icon} alt="day weather icon"/>
          <h6>{temperature}</h6>
          <span>{item.day.phrase}</span>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default WeatherForecastListItem