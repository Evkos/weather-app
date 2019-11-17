import React, { Component } from 'react'
import FavoriteListItem from '../favorite-list-item'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Card, Col, Container, Row } from 'react-bootstrap'

class FavoriteList extends Component {

  render () {
    const { favoriteCities } = this.props
    return (
      <Col md={12} className="mb-sm-4">
        <Card>
          <Card.Header as="h5" className="text-center">Favorite List</Card.Header>
          <Card.Body>
            <Container>
              <Row>
                {
                  Object.keys(favoriteCities).map((cityId) => {
                    return (
                      <FavoriteListItem key={cityId} city={favoriteCities[cityId]}/>
                    )
                  })
                }
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

const mapStateToProps = ({ favoriteCities }) => {
  return { favoriteCities }
}

export default compose(
  connect(mapStateToProps)
)(FavoriteList)