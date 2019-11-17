import React from 'react'
import './error-indicator.css'
import { Col, Container, Jumbotron, Row } from 'react-bootstrap'

const ErrorIndicator = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Jumbotron className="text-center mt-5">
            <h1>Oops! Something went wrong...</h1>
            <p>
              But don't worry - we try to fix this as soon as possible!
            </p>
          </Jumbotron>
        </Col>
      </Row>
    </Container>

  )
}

export default ErrorIndicator
