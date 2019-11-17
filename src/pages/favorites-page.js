import React, {Fragment} from 'react'
import {Col, Row} from "react-bootstrap";
import FavoriteList from "../components/favorite-list";

const FavoritesPage = () => {
  return (
   <Fragment>
     <Row>
       <Col>
         <FavoriteList/>
       </Col>
     </Row>
   </Fragment>
  )
}

export default FavoritesPage