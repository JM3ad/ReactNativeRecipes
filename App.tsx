import React from 'react';
import Router from 'router';
import {NavigationContainer} from '@react-navigation/native';
import {useFonts} from '@use-expo/font';
import {AppLoading} from 'expo';

const App = () => {
  useFonts({
    'Open Sans': require('./assets/fonts/Open Sans.ttf'),
    'Merriweather': require('./assets/fonts/Merriweather-Regular.ttf'),
  });

  return <NavigationContainer>
    <Router/>
  </NavigationContainer>;
};

export default App;
