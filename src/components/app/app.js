import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { FavoritesPage, HomePage } from '../../pages'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../header'

class App extends Component {

  render () {
    return (
      <Container>
        <Row className='my-4'>
          <Col md={12}>
            <Container>
              <Header/>
            </Container>
          </Col>
        </Row>
        <Switch>
          <Route path='/' component={HomePage} exact/>
          <Route path='/favorites' component={FavoritesPage}/>
        </Switch>
      </Container>

    )
  }
}

export default App