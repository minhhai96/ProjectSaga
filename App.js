import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './app/src/router/RootNavigation';
import Root from './app/src/router/Root';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Root />
    </NavigationContainer>
  );
};

export default App;
