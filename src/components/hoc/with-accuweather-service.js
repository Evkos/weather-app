import React from 'react'
import { AccuweatherServiceConsumer } from '../accuweather-service-context'

const withAccuweatherService = () => (Wrapped) => {

  return (props) => {
    return (
      <AccuweatherServiceConsumer>
        {
          (accuweatherService) => {
            return (<Wrapped {...props}
                             accuweatherService={accuweatherService}/>)
          }
        }
      </AccuweatherServiceConsumer>
    )
  }
}

export default withAccuweatherService
