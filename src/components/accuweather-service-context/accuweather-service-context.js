import React from 'react';

const {
  Provider: AccuweatherServiceProvider,
  Consumer: AccuweatherServiceConsumer
} = React.createContext();

export {
  AccuweatherServiceProvider,
  AccuweatherServiceConsumer
};
