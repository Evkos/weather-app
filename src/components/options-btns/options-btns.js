import React, { Component } from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { compose } from 'redux'
import { connect } from 'react-redux'
import {
  favoriteCityAddedAction,
  favoriteCityRemovedAction,
  fahrenheitSwitchedAction
} from '../../actions/actions'

class OptionsBtns extends Component {

  switchFavoriteLocation = () => {
    const { currentCity, favoriteCities, favoriteCityAddedAction, favoriteCityRemovedAction } = this.props

    if (favoriteCities[currentCity.id]) {
      favoriteCityRemovedAction(currentCity)
    } else {
      favoriteCityAddedAction(currentCity)
    }
  }

  switchDegrees = () => {
    const { fahrenheitSwitchedAction } = this.props
    fahrenheitSwitchedAction()
  }

  render () {
    const { degreeBtn, favoriteCities, currentCity } = this.props
    let label = 'Add to Favorites'
    let variant = 'primary'
    if (currentCity) {
      label = (favoriteCities[currentCity.id]) ? 'Remove from Favorites' : 'Add to Favorites'
      variant = (favoriteCities[currentCity.id]) ? 'danger' : 'primary'
    }

    return (
      <Col md={3} className="mb-4">
        <Card>
          <Card.Header as="h5" className="text-center">Options</Card.Header>
          <Card.Body>
            <Button onClick={this.switchFavoriteLocation} variant={variant}
                    className="d-block mx-auto mb-2">{label}</Button>
            <Button onClick={this.switchDegrees}
                    className="d-block mx-auto">{degreeBtn}</Button>
          </Card.Body>
        </Card>

      </Col>
    )
  }
}

const mapStateToProps = ({ currentCity, favoriteCities, degreeBtn }) => {
  return { currentCity, favoriteCities, degreeBtn }
}

const mapDispatchToProps = {
  favoriteCityAddedAction,
  fahrenheitSwitchedAction,
  favoriteCityRemovedAction
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(OptionsBtns)