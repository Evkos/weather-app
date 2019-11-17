import React from 'react'
import { Col, Row } from 'react-bootstrap'
import NavButtons from '../nav-buttons'
import { Link } from 'react-router-dom'

import './header.css'

const Header = () => {
  return (
    <Row>
      <Col md={9}><h1 className="d-inline-block site-title"><Link to="/">Weather App</Link></h1></Col>
      <Col md={3}>
        <NavButtons/>
      </Col>
    </Row>
  )
}

export default Header