import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './app/src/router/RootNavigation';
import Root from './app/src/router/Root';
import {Provider} from 'react-redux';
import {store} from './app/src/redux';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Root />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
