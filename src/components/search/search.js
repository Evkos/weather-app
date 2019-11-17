import React, { Component } from 'react'
import { AsyncTypeahead } from 'react-bootstrap-typeahead'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  currentCitySelectedMiddleware,
  citiesLoadedMiddleware,
  currentCityLoadedMiddleware
} from '../../actions/middlewares'
import { Card, Col } from 'react-bootstrap'

class Search extends Component {

  componentDidMount () {

    const { currentCity, currentCityLoadedMiddleware } = this.props

    const currentCityLabel = (currentCity !== undefined) ? currentCity.label : 'Tel Aviv'
    currentCityLoadedMiddleware(currentCityLabel)

  }

  render () {
    const { cities, currentCity, loading, citiesLoadedMiddleware, currentCitySelectedMiddleware, favBtnStyleChangedMiddleware } = this.props
    return (
      <Col md={5} className="mb-4">
        <Card>
          <Card.Header as="h5" className="text-center">Choose city you need</Card.Header>
          <Card.Body>
            <AsyncTypeahead id="basic-example"
                            isLoading={loading}
                            searchText='Searching...'
                            selectHintOnEnter={true}
                            selected={currentCity ? [currentCity] : []}
                            options={cities}
                            placeholder="Choose a city..."
                            onSearch={(query) => {
                              citiesLoadedMiddleware(query)
                            }}
                            onChange={(selected) => {
                              currentCitySelectedMiddleware(selected[0])
                            }}
            />
          </Card.Body>
        </Card>
      </Col>

    )
  }
}

const mapStateToProps = ({ cities, currentCity, loading }) => {
  return { cities, currentCity, loading }
}

const mapDispatchToProps = {
  citiesLoadedMiddleware,
  currentCitySelectedMiddleware,
  currentCityLoadedMiddleware
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Search)