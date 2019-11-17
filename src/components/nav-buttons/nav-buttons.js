import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavButtons = () => {
  return (
    <div className="float-right">
      <Link to={'/'} className="ml-3">
        <Button variant="primary">Home</Button>
      </Link>
      <Link to={'/favorites'} className="ml-3">
        <Button variant="primary">Favorites</Button>
      </Link>


    </div>
  )
}

export default NavButtons